import { Injectable } from '@angular/core';
import { ITodo } from './ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }

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
}
