package com.github.alallk.tasks.controller;

import com.github.alallk.tasks.domain.Task;
import com.github.alallk.tasks.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping(value = {"", "/"})
    public Iterable<Task> list(){
        return this.taskService.list();
    }

    @PostMapping("/save")
    public Task save(@RequestBody Task task){
        return this.taskService.save(task);
    }
}
