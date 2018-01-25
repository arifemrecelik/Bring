import React from 'react';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            email: '',
            password: ''
        })
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                console.log(user);
            }
        })
    }

    signUpUser = (email, password) => {
        try {
            if(this.state.password.length < 6) {
                alert("Please enter at least 6 characters");
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(email, password);
            alert("İşlem tamam!");
        } catch(error) {
            console.log(error.toString());
            console.log(email);
        }
    }

    loginUser = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
                console.log(user);
                this.props.navigation.navigate('Profile');
            });
        } catch(error) {
            console.log(error.toString());
        }
    }

    async loginWithFacebook()  {
      const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync
      {'571652216560341',  { permissions:['public_profile'] }}

      if (type == 'success') {
          const credential = firebase.auth.FacebookAuthProvider.credential(token);

          firebase.auth().signInWithCredential(credential).catch((error) => {
              console.log(error);
          })
      }
      else {
          console.log(type);
      }
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

            <TouchableOpacity style={styles.loginButton}>
                <Text onPress={() => this.loginWithFacebook()} style={styles.loginText}>FACEBOOK</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} style={styles.loginButton}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}




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
        backgroundColor: '#c0392b',
        marginBottom: 10
    },
    loginText: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20
    }
});
