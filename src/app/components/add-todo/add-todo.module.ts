import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddTodoComponent } from './add-todo.component';

@NgModule({
  declarations: [AddTodoComponent],
  imports: [CommonModule],
  exports: [AddTodoComponent],
})
export class AddTodoModule {}
