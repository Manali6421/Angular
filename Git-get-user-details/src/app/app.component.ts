import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Git-get-user-details';

  linkData = '';
  finalLink = '';
  linkString = 'https://api.github.com/users/';
  getUserName;
  showResult = false;
  repoData = [];
  gistData = [];
  followerData = [];

  constructor(private http: HttpClient) {}

  toGetDetails(): void {
    console.log(this.linkData);
    this.finalLink = this.linkString + this.linkData;
    this.getAPI(this.finalLink);
    this.showResult = true;
  }

  getAPI(url): void {
    this.http.get(url).subscribe(
      (response) => {
        this.http.get(response['repos_url']).subscribe(
          (repos: Array<Object>) => {
            if (repos && repos.length > 0) {
              repos.forEach((repo) => {
                console.log(repo['name']);
                this.repoData.push(repo['name']);
              });
            } else {
              this.repoData.push('No such repos');
            }
          },
          (error) => {
            this.repoData.push('No such repos');
          }
        );

        this.http.get(response['gists_url']).subscribe(
          (gists: Array<Object>) => {
            if (gists && gists.length > 0) {
              gists.forEach((gist) => {
                console.log(gist['id']);
                this.gistData.push(gist['id']);
              });
            } else {
              this.gistData.push('No such gists');
            }
          },
          (error) => {
            this.gistData.push('No such gists');
          }
        );

        this.http.get(response['followers_url']).subscribe(
          (followers: Array<Object>) => {
            if (followers && followers.length > 0) {
              followers.forEach((follower) => {
                console.log(follower['login']);
                this.followerData.push(follower['login']);
              });
            } else {
              this.followerData.push('No such followers');
            }
          },
          (error) => {
            this.followerData.push('No such followers');
          }
        );
      },

      (error) => {
        console.log('No such username exists');
      }
    );
  }
}
