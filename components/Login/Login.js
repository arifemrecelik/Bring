import React from 'react';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

signUpUser = (email, password) => {
    try {
        firebase.auth().createUserWithEmailAndPassword(email, password);
        alert("İşlem tamam!");
    } catch(error) {
        console.log(error.toString());
        console.log(email);
    }
}

onPressSignIn = () => {
    alert("Yes");
};

renderCurrentState = () => {
    if(this.state.authenticating) {
        alert("It worked");
    }
}

login = () => {
    alert("Test");
}

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={require('../../images/logo.png')}/>
            <TextInput underlineColorAndroid='transparent'
                placeholder="username or e-mail"
                style={styles.input}
                onChangeText={(text) => this.setState({email: text})}
            />
            <TextInput
                underlineColorAndroid='transparent'
                placeholder="password"
                secureTextEntry style={styles.input}
                onChangeText={(password) => this.setState({password})}
            />

        <TouchableOpacity onPress={() => signUpUser(this.state.email, this.state.password)} style={styles.loginButton}>
                <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>

            {/*<TouchableOpacity onPress={alert("It worked")} style={styles.loginButton}>
                <Text style={styles.loginText}>INDICATOR</Text>
            </TouchableOpacity>*/}
            </KeyboardAvoidingView>
        );
    }



    onPressSignIn = () => {

        alert("Yes");
    };
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
