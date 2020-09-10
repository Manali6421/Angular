import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Calculator';
  showExpression = false;
  str = '';
  expression = '';

  result(value) {
    this.str += value;
  }

  delete() {
    if (!this.showExpression) {
      this.str = this.str.substring(0, this.str.length - 1);
    } else {
      this.showExpression = false;
      this.str = '';
    }
  }

  clear() {
    this.expression = '';
    this.showExpression = false;
    this.str = '';
  }

  showResult() {
    this.expression = eval(this.str);
    this.showExpression = true;
  }
}
