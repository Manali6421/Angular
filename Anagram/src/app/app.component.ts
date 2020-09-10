import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Anagram';

  fileString;
  inputData;
  textData;
  arrData = [];
  resultArr = [];
  showResult = false;

  changeListener($event): void {
    this.inputData = $event.target;
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();
    const fileType = inputValue.parentElement.id;
    const x = this;
    myReader.onloadend = function (e) {
      x.fileString = myReader.result;
      // console.log(x);
      x.populateData();
      x.showResult = true;
    };
    myReader.readAsText(file);
  }

  clickListener(): void {
    this.readThis(this.inputData);
  }

  populateData() {
    this.arrData = this.fileString.split('\n');
    // console.log(this.arrData);
    // console.log(this.textData);
    let obj = {};
    const x = this.textData.split('');
    x.forEach((alpha) => {
      if (alpha in obj) {
        obj[alpha] = obj[alpha] + 1;
      } else {
        obj[alpha] = 1;
      }
    });

    this.arrData.forEach((word) => {
      if (word.length === this.textData.length) {
        let obj1 = {};
        const y = word.split('');
        y.forEach((alpha) => {
          if (alpha in obj1) {
            obj1[alpha] = obj1[alpha] + 1;
          } else {
            obj1[alpha] = 1;
          }
        });
        if (Object.keys(obj).length === Object.keys(obj1).length) {
          let print = true;
          Object.keys(obj1).forEach((key) => {
            if (!(key in obj) || obj[key] !== obj1[key]) {
              print = false;
            }
          });
          if (print) {
            this.resultArr.push(word);
          }
        }
      }
    });
    // console.log(this.resultArr);
  }
}
