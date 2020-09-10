import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Task-boxes';

  top;
  value = {};

  clickListener(id): void {
    if (id in this.value && !this.value[id]) {
      this.top = document.getElementById(id);
      this.top.style['z-index'] = 2;
      this.value[id] = true;
    } else if (id in this.value && this.value[id]) {
      this.top = document.getElementById(id);
      this.top.style['z-index'] = -2;
      this.value[id] = false;
    } else {
      this.top = document.getElementById(id);
      this.top.style['z-index'] = 2;
      this.value[id] = true;
    }
  }
}
