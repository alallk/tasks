import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import {TaskService} from "../task.service";
@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

    constructor(private taskService:TaskService) { }

    ngOnInit() {
        return this.taskService.getTasks().subscribe((task: any[])=>{
            this.tasks = task
        },(error) => console.log(error));
    }

    getDueDateLabel(task:Task){
        return task.completed ? 'label-success' : 'label-primary';
    }

    onTaskChange(event, task){
        // this.taskService.saveTask(task, event.target.checked).subscribe();
        console.log('task has changed')
    }

}
