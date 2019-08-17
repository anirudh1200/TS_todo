import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

// react-native-web is aliased to react-native automatically by create-react-app

export default () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Todo
            </Text>
            <TaskInput />
            <TaskList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    text: {
        width: 'auto',
        margin: 'auto',
        fontSize: 40,
        justifyContent: "center",
        padding: 40
    },
})
