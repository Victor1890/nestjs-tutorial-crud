import { Module } from "@nestjs/common";
import { TasksService } from './tasks.service';
import { TaskController } from './tasks.controller';

@Module({
    providers: [TasksService],
    controllers: [TaskController]
})
export class TasksModule { }
