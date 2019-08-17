import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native-web';
import IndivisualTask from './IndivisualTask.tsx';
import Task from '../interfaces/Task.Interface';
import { ReducerState } from '../store/reducer';
import { connect } from 'react-redux';

interface PropsInterface {
	tasks: Task[]
}

const TaskList: React.FC<PropsInterface> = ({ tasks }) => {
	if (tasks.length === 0) {
		return (
			<View style={styles.box}>
				<Text>
					You have no todos !!!
				</Text>
			</View>
		)
	}
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

const mapStateToProps = (state: ReducerState) => {
	return {
		tasks: state.tasks
	}
}

export default connect(mapStateToProps)(TaskList);

const styles = StyleSheet.create({
	box: {
		padding: 20,
		margin: 'auto',
		width: '40%',
		backgroundColor: 'rgba(10,10,10,.1)'
	}
});