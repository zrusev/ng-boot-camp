import { Component } from '@angular/core';
import { ITodo } from './ITodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-boot-camp';
  todos: ITodo[] = [
    { 
      name: 'some name',
      completed: false
    },
    { 
      name: 'some second name',
      completed: false
    }
  ];

  changeTitle(inp: HTMLInputElement) {
    this.title = inp.value;
  }

  toggler(ind: number) {
    this.todos[ind].completed = !this.todos[ind].completed;
  }
}
