package com.github.alallk.tasks.service;

import com.github.alallk.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);

}
