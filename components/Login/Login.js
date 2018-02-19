import React from 'react';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import FBSDK, { LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

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
                //console.log(user);
            }
        })
    }

    /*_responseInfoCallback(error: ?Object, result: ?Object) {
      if (error) {
        alert('Error fetching data: ' + error.toString());
      } else {
        alert('Success fetching data: ' + result.toString());
      }
    }

    const infoRequest = new GraphRequest(
        '/me',
        null,
        this._responseInfoCallback,
    );

    new GraphRequestManager().addRequest(infoRequest).start();*/

    _responseInfoCallback = (error: ?Object, result: ?Object) => {
    alert("meow response");
    if (error) {
      alert('Error fetching data: ' + error.toString());
      console.log(Object.keys(error));// print all enumerable
      console.log(error.errorMessage); // print error message
      // error.toString() will not work correctly in this case
      // so let use JSON.stringify()
      meow_json = JSON.stringify(error); // error object => json
      console.log(meow_json); // print JSON
    } else {
      alert('Success fetching data: ' + result.toString());
      console.log(Object.keys(result));
      meow_json = JSON.stringify(result); // result => JSON
      console.log(meow_json); // print JSON
    }
  }

    testFacebook = () => {
        const {type, token} = Expo.Facebook.logInWithReadPermissionsAsync
        ('571652216560341',  {
            permissions:['public_profile']
        });

        const infoRequest = new GraphRequest(
            '/me',
            null,
            this._responseInfoCallback,
        );

        new GraphRequestManager().addRequest(infoRequest).start();
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

    deneme = () => {
        console.log("Deneme");
    }

    async loginWithFacebook()  {
      const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync
      ('571652216560341',  {
          permissions:['public_profile']
      });

      if (type == 'success') {
          const credential = firebase.auth.FacebookAuthProvider.credential(token);

          console.log("Success");

          firebase.auth().signInWithCredential(credential).catch((error) => {
              console.log("ERROR\n");
              console.log(error);
          })

          /*const response = fetch(
              'https://graph.facebook.com/me?access.token=${token}'
          );*/

          //alert(response);
          //alert(response.json());
          //console.log(response.json());
          //console.log('Hi ${(await response.json()).name}');
          //Alert.alert ('Hi ${(await response.json()).name}');

          this.props.navigation.navigate('Profile');
      }
      else {
          console.log("TYPE\n");
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

        <TouchableOpacity onPress={() => this.signUpUser(this.state.email, this.state.password)} style={styles.loginButton}>
                <Text style={styles.loginText}>SIGN UP</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.loginWithFacebook()} style={styles.loginButton}>
                <Text  style={styles.loginText}>FACEBOOK</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => this.testFacebook()} style={styles.loginButton}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}
//this.props.navigation.navigate('Profile')



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
