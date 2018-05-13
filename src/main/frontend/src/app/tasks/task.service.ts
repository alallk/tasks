import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Task} from "./task.model";

@Injectable()
export class TaskService {

    BASE_API: String = '/api';
    TASKS_API = this.BASE_API + "/tasks";
    TASKS_API_SAVE = this.TASKS_API + '/save';

    onTaskAdded = new EventEmitter<Task>();

    constructor(private http: HttpClient) {
    }

    getTasks(){
        return this.http.get(this.TASKS_API);
    }

    saveTask(task:Task, checked: boolean){
        task.completed = checked;
        return this.http.post(this.TASKS_API_SAVE, task);
    }
}
