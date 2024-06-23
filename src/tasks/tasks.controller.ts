import { Body, Controller, Delete, Get, Param, Post, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { Response } from "express";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./task.dto";

@Controller('/tasks')
export class TaskController {

    constructor(private tasksService: TasksService) { }

    @Get('/')
    getAllTasks(@Query() query: any, @Res() res: Response) {
        console.log("query: ", query)
        return res.json(this.tasksService.getAllTasks())
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string, @Res() res: Response) {
        const data = this.tasksService.getTaskById(id);

        if (!data) {
            return res.status(404).json({
                error: {
                    message: 'Task not found!'
                }
            });
        }

        return data;
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createTask(@Body() body: CreateTaskDto, @Res() res: Response) {
        const newTask = this.tasksService.createTask(body.title, body.description);
        return res.json(newTask);
    }

    @Delete('/:id')
    deleteTask(id: string) {
        return this.tasksService.deleteTask(id);
    }


}