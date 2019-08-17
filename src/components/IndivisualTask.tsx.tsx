import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native-web';
import Task from '../interfaces/Task.Interface';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { DELETE_TODO } from '../store/actions';

interface PropsInterface {
	task: Task,
	deleteTodo: (key: number) => {
		type: string;
		key: number;
	}
}

const IndivisualTask: React.FC<PropsInterface> = ({ task, deleteTodo }) => {
	return (
		<TouchableOpacity
			style={styles.indivisualTask}
			onPress={() => deleteTodo(task.key)}
		>
			<Text>
				{task.todo}
			</Text>
		</TouchableOpacity>
	)
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		deleteTodo: (key: number) => dispatch({ type: DELETE_TODO, key })
	}
}

export default connect(null, mapDispatchToProps)(IndivisualTask);

const styles = StyleSheet.create({
	indivisualTask: {
		height: 20,
		margin: 10
	}
});