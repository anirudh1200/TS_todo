import Task from '../interfaces/Task.Interface';
import { TaskActionTypes } from '../interfaces/Action.interface';
import { ADD_TODO, DELETE_TODO } from './actions'

interface InitState {
	tasks: Task[]
}

const initState: InitState = {
	tasks: []
}

const RootReducer = (state: InitState = initState, action: TaskActionTypes) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				tasks: [...state.tasks, action.task]
			}
		case DELETE_TODO:
			let taskList = state.tasks.filter(task => (task.key !== action.key));
			return {
				tasks: taskList
			}
		default:
			return state
	}
}

export default RootReducer;

export type ReducerState = ReturnType<typeof RootReducer>