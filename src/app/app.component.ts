import { Component, OnInit, ViewChild, OnChanges, DoCheck, ElementRef } from '@angular/core';
import { ITodo } from './ITodo';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {  
  @ViewChild('inp') inp: ElementRef;
  title = 'ng-boot-camp';
  
  todos: ITodo[];
  
  constructor(public todoService: TodoServiceService) { }
  
  ngOnInit() {
  }
  
  ngDoCheck() {
    this.todos = this.todoService.todos;
  }

  changeTitle(inp: HTMLInputElement) {
    this.title = inp.value;
  }

  toggler(ind: number) {
    this.todoService.toggler(ind);
  }

  removeler(ind: number) {
    this.todoService.removeler(ind);
  }

  add() {
    const todo = {
      name: this.inp.nativeElement.value,
      completed: false
    };

    this.todoService.add(todo as ITodo);
  }
}
