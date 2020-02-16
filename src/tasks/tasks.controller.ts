import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidator } from './pipes/task-status-validator';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {

  private logger = new Logger('TaskController');

  constructor(private tasksService: TasksService) {
  }

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto ): Task[] {
  //   this.logger.debug(filterDto);
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  //   return this.tasksService.getAllTasks();
  // }
  //
  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
     return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  // @Delete(':id')
  // deleteTask(@Param('id') id: string) {
  //   return this.tasksService.deleteTask(id);
  // }
  //
  // @Patch(':id/status')
  // updateTaskStatus(@Param('id') id: string,
  //                  @Body('status', TaskStatusValidator) status: TaskStatus): Task {
  //   return this.tasksService.updateTaskStatus(id, status);
  // }

}
