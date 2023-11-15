import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.taskService.getAll().subscribe((data) => {
      this.tasks = data;
    });
  }

  removeTask(task: Task): void {
    this.taskService.delete(task.id).subscribe(() => {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    });
  }

  toggleTaskStatus(task: Task): void {
    this.taskService.update(task.id, task).subscribe(() => {
      task.done = !task.done;
    });
  }

  getUncompletedTasks(): Task[] {
    return this.tasks.filter((task) => task.done === false);
  }

  getCompletedTasks(): Task[] {
    return this.tasks.filter((task) => task.done);
  }
}
