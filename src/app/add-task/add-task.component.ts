import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../model/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  //j'instancie le model de données
  task: Task = new Task('', '', false);

  constructor() {}

  @Output()
  sendTaskToParent: EventEmitter<Task> = new EventEmitter<Task>();

  //j'envoie la tâche au parent lors de la soumission du formulaire
  createTask() {
    this.sendTaskToParent.emit(this.task);
  }
}
