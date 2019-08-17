import Task from '../interfaces/Task.Interface';

interface AddTaskAction {
	type: string,
	task: Task
}

interface DeleteTaskAction {
	type: string,
	key: number
}

export type TaskActionTypes = AddTaskAction & DeleteTaskAction;