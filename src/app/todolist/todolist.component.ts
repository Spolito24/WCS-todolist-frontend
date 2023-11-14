import { Component } from '@angular/core';
import { Task } from '../model/Task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  tasks: Task[] = [
    new Task('Faire la vaisselle', 'En rentrant du travail', false),
    new Task('Faire la lessive', 'Avant de partir au travail', false),
    new Task('Faire les courses', 'En rentrant du travail', true),
  ];

  removeTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  toggleTaskStatus(task: Task): void {
    task.isDone = !task.isDone;
  }

  getUncompletedTasks(): Task[] {
    return this.tasks.filter((task) => task.isDone === false);
  }

  getCompletedTasks(): Task[] {
    return this.tasks.filter((task) => task.isDone);
  }

  onReceiveNewTask(task: Task) {
    this.tasks.push(task);
  }
}
