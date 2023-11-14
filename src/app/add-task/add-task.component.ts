import { Component } from '@angular/core';
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

  //j'affiche le résultat du formulaire dans la console
  onSubmit() {
    console.log(this.task);
  }
}
