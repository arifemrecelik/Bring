import React from 'react';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
    render() {
        //const { navigate } = this.props.navigation;
        //const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={require('../../images/logo.png')}/>
            <TextInput underlineColorAndroid='transparent' placeholder="username or e-mail"  style={styles.input}/>
            <TextInput underlineColorAndroid='transparent' placeholder="password" secureTextEntry style={styles.input}/>
            <TouchableOpacity onPress={() => navigate('CreateAccount')} style={styles.loginButton}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }

    login = () => {
        navigate('CreateAccount');
    }
}

export class CreateAccount extends React.Component {
  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Image source={require('../../images/logo.png')}/>
          <TextInput underlineColorAndroid='transparent' placeholder="username or e-mail"  style={styles.input}/>
          <TextInput underlineColorAndroid='transparent' placeholder="password" secureTextEntry style={styles.input}/>
          <TouchableOpacity onPress={this.login} style={styles.loginButton}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }

  login = () => {
    alert(firebase);
  }
}

export const App = StackNavigator({
    Login : { screen: Login },
    CreateAccount: { screen: CreateAccount },
});

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAkcVp-z-1vm9cEM4d5jKciH63aL_ByNtw",
    authDomain: "bring-26.firebaseapp.com",
    databaseURL: "https://bring-26.firebaseio.com",
    storageBucket: "bring-26.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e74c3c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 60,
        width: 300,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 20,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    loginButton: {
        height: 60,
        width: 300,
        paddingVertical: 15,
        backgroundColor: '#c0392b'
    },
    loginText: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20
    }
});
