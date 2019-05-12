import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-boot-camp';

  changeTitle(inp: HTMLInputElement) {
    this.title = inp.value;
  }
}
