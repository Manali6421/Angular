import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'Todo';

  name = '';
  newName = '';
  todoArr = [];
  editArr = [];
  showResult = false;
  editResult = false;

  ngOnInit(): void {
    if (localStorage.getItem('listItems')) {
      this.todoArr = JSON.parse(localStorage.getItem('listItems'));
    }
  }

  clickListener(): void {
    if (this.name) {
      this.todoArr.push(this.name);
      this.editArr.push(false);
      localStorage.setItem('listItems', JSON.stringify(this.todoArr));
    }
    this.name = '';
  }

  deleteItem(index: number) {
    this.todoArr.splice(index, 1);
  }

  editItem(index: number) {
    this.editArr[index] = true;
  }

  resetName(index): void {
    if (this.newName) {
      this.todoArr.splice(index, 1, this.newName);
      this.editArr[index] = false;
    }
  }
}
