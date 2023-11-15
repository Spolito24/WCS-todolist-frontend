import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/Task';

const baseUrl = 'http://localhost:8080/api/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Task[]>(baseUrl);
  }

  create(data: Task) {
    return this.http.post(baseUrl, data);
  }

  update(id: number, data: Task) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
