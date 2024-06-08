import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.less',
})
export class TodoListItemComponent {
  @Input() completed: boolean = false;
  @Output() onToggleCompleted = new EventEmitter<void>();
}
