import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task.model";

@Component({
    selector: 'app-tasks-add',
    templateUrl: './tasks-add.component.html',
    styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

    taskValueInput: string = '';

    constructor(private taskService: TaskService) { }

    ngOnInit() {
    }

    onTaskAdd(event){
        let task: Task = new Task(event.target.value, false, new Date());
        this.taskService.saveTask(task,false).subscribe(
            (newTask: Task) =>{
                this.resetTaskInput();
                this.taskService.onTaskAdded.emit(newTask);
            }
        );
    }

    private resetTaskInput(){
        this.taskValueInput = '';
    }

}
