import { Component, OnInit, DoCheck } from '@angular/core';
import { ITodo } from '../ITodo';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit, DoCheck {
  todos: ITodo[];

  ngOnInit(){
  }

  constructor(public todoService: TodoServiceService) { }
  
  ngDoCheck() {
    this.todos = this.todoService.todos;
  }

  toggler(ind: number) {
    this.todoService.toggler(ind);
  }

  removeler(ind: number) {
    this.todoService.removeler(ind);
  }
}
