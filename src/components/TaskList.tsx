import React from 'react';
import { StyleSheet, FlatList } from 'react-native-web';
import IndivisualTask from './IndivisualTask.tsx';
import Task from '../interfaces/Task.Interface';

let tasks: Task[];

tasks = [
	{ todo: 'first', key: 1 },
	{ todo: 'second', key: 2 }
]

export default () => {
	return (
		<FlatList
			style={styles.box}
			data={tasks}
			keyExtractor={item => item.key.toString()}
			renderItem={({ item }: { item: Task }) => (
				<IndivisualTask
					task={{ todo: item.todo, key: item.key }}
				/>
			)}
		>
		</FlatList>
	)
}

const styles = StyleSheet.create({
	box: {
		padding: 20,
		margin: 'auto',
		width: '50%',
		backgroundColor: 'rgba(10,10,10,.1)'
	}
});