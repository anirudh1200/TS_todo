import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native-web';
import Task from '../interfaces/Task.Interface';

interface TypeProps {
	task: Task
}

export default ({ task }: TypeProps) => {
	return (
		<TouchableOpacity
			style={styles.indivisualTask}
			onPress={() => console.log(task)}
		>
			<Text>
				{task.todo}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	indivisualTask: {
		height: 20,
		margin: 10
	}
});