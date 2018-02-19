import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login/Login';
import CreateAccount from './components/Login/CreateAccount';
import Profile from './components/Login/Profile';

import * as firebase from 'firebase';

const RootNavigator = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({ header: null })
    },
    CreateAccount: {
        screen: CreateAccount
    },
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({ header: null })
    },
});



export default class App extends React.Component {
    componentWillMount() {
        // Initialize Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyAkcVp-z-1vm9cEM4d5jKciH63aL_ByNtw",
            authDomain: "bring-26.firebaseapp.com",
            databaseURL: "https://bring-26.firebaseio.com",
            projectId: "bring-26",
            storageBucket: "bring-26.appspot.com"
        };

        firebase.initializeApp(firebaseConfig);
    }


    render() {
        return (            
            <RootNavigator />
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
