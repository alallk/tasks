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
        this.loadTasks();
        this.taskService.onTaskAdded.subscribe(
            () => this.loadTasks()
        );
    }

    getDueDateLabel(task:Task){
        return task.completed ? 'badge-success' : 'badge-primary';
    }

    onTaskChange(event, task){
        this.taskService.saveTask(task, event.target.checked).subscribe();
    }

    private loadTasks(){
        this.taskService.getTasks().subscribe((task: any[])=>{
            this.tasks = task
        },(error) => console.log(error));
    }

}
