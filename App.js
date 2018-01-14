import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login/Login'
import CreateAccount from './components/Login/CreateAccount'

const SimpleApp = StackNavigator({
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount}
});

export default class App extends React.Component {
    render() {
        return (
            <Login />
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
