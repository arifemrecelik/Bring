import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <TextInput style={styles.input}/>
          <TextInput style={styles.input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980b9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.2)'
  }
});
