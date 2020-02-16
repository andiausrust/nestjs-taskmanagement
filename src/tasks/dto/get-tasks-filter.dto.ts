import { TaskStatus } from '../task-status.enum';

export class GetTasksFilterDto {
  status: TaskStatus;
  searchTerm: string;
}
