import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks: { id: string, title: string, description: string }[] = [];

    getAllTasks() {
        return this.tasks;
    }

    getTaskById(id: string) {
        return this.tasks.find(task => task.id === id);
    }

    createTask(title: string, description: string) {
        const task = {
            id: Date.now().toString(),
            title,
            description
        };

        this.tasks.push(task);
        return task;
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        return this.tasks;
    }
}
