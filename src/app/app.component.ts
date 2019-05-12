import { Component } from '@angular/core';
import { ITodo } from './ITodo';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-boot-camp';

  todos: ITodo[];

  constructor(public todoService: TodoServiceService) {
    this.todos = todoService.todos;
  }

  changeTitle(inp: HTMLInputElement) {
    this.title = inp.value;
  }

  toggler(ind: number) {
    this.todos[ind].completed = !this.todos[ind].completed;
  }

  removeler(idx: number) {
    this.todos = this.todos.filter((el, index) => index !== idx);
  }
}
