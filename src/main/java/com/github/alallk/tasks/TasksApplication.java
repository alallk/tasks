package com.github.alallk.tasks;

import com.github.alallk.tasks.domain.Task;
import com.github.alallk.tasks.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class TasksApplication {

    public static void main(String[] args) {
        SpringApplication.run(TasksApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(TaskService service){

        return args -> {
            service.save( new Task( 1L, "Create Spring Boot App", LocalDate.now(), true));
            service.save( new Task( 2L, "Create Spring Boot App 2", LocalDate.now(), false));
            service.save( new Task( 3L, "Create Spring Boot App 3", LocalDate.now(), false));
            service.save( new Task( 4L, "Create Spring Boot App 4", LocalDate.now(), false));
            service.save( new Task( 5L, "Create Spring Boot App 5", LocalDate.now(), false));
            service.save( new Task( 6L, "Create Spring Boot App 6", LocalDate.now(), false));
            service.save( new Task( 7L, "Create Spring Boot App 7", LocalDate.now(), false));
            service.save( new Task( 8L, "Create Spring Boot App 8", LocalDate.now(), false));
            service.save( new Task( 9L, "Create Spring Boot App 9", LocalDate.now(), false));
            service.save( new Task( 10L, "Create Spring Boot App 10", LocalDate.now(), false));
        };
    }
}
