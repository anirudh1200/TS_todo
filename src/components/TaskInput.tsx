import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native-web';

export default () => {
	const [todoValue, setTodoValue] = useState('');
	return (
		<View style={styles.textView}>
			<TextInput
				style={styles.textInput}
				placeholder="Add Tasks"
				value={todoValue}
				onChangeText={value => setTodoValue(value)}
				onSubmitEditing={() => {
					console.log(todoValue);
					setTodoValue('');
				}}
			/>
		</View>
	)
}

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