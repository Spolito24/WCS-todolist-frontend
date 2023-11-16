import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../model/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  task: Task = new Task(0, '', '', false);

  constructor() {}

  @Output()
  sendTaskToParent: EventEmitter<Task> = new EventEmitter<Task>();

  createTask() {
    this.sendTaskToParent.emit(this.task);
  }
}
