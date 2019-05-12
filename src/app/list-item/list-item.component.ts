import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../ITodo';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() todo: ITodo
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  innerToggler() {
    this.toggle.emit();
  }

}
