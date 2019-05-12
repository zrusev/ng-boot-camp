import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { ITodo } from '../ITodo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @ViewChild('inp') inp: ElementRef;

  constructor(public todoService: TodoServiceService, private router: Router) { }

  ngOnInit() {
  }

  add() {
    const todo = {
      name: this.inp.nativeElement.value,
      completed: false
    };

    this.todoService.add(todo as ITodo);

    this.router.navigate(['/list']);
  }
}
