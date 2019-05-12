import { Injectable, OnInit } from '@angular/core';
import { ITodo } from './ITodo';

@Injectable()
export class TodoServiceService {
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

  constructor() { }

  toggler(ind: number) {
    this.todos[ind].completed = !this.todos[ind].completed;
  }

  removeler(idx: number) {
    this.todos = this.todos.filter((el, index) => index !== idx);
  }

  add(todo: ITodo) {
    this.todos = this.todos.concat(todo);
  }
}
