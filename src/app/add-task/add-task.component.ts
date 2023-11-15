import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../model/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  task: Task = new Task(0, '', '', false);

  constructor(private taskService: TaskService) {}

  createTask() {
    this.taskService.create(this.task).subscribe((data) => {});
    location.reload();
  }
}
