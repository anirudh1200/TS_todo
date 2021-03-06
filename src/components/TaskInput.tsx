import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native-web';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ADD_TODO } from '../store/actions';
import Task from '../interfaces/Task.Interface';

interface PropInterface {
	addTask: (task: Task) => {
		type: string;
		task: Task;
	}
}

// const TaskInput: React.FC<PropInterface> = props => {
const TaskInput: React.FC<PropInterface> = props => {
	const [todoValue, setTodoValue] = useState('');
	return (
		<View style={styles.textView}>
			<TextInput
				style={styles.textInput}
				placeholder="Add Tasks"
				value={todoValue}
				onChangeText={value => setTodoValue(value)}
				onSubmitEditing={() => {
					let newTask: Task = { todo: todoValue, key: Math.floor(Math.random() * 1000) };
					props.addTask(newTask);
					setTodoValue('');
				}}
			/>
		</View>
	)
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		addTask: (task: Task) => dispatch({ type: ADD_TODO, task: task })
	}
}

export default connect(null, mapDispatchToProps)(TaskInput);

const styles = StyleSheet.create({
	textInput: {
		height: 40,
		paddingRight: 10,
		paddingLeft: 10,
		borderColor: 'gray',
		width: '100%',
		borderWidth: 1,
	},
	textView: {
		width: 'auto',
		margin: 'auto',
	},
})