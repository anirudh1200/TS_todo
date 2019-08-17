import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './store/reducer';

// react-native-web is aliased to react-native automatically by create-react-app

const store = createStore(Reducer);

export default () => {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Todo
                </Text>
                <TaskInput />
                <TaskList />
            </View>
        </Provider>
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
