import React from 'react'
import { Button, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//<Text style={{marginTop: StatusBar.currentHeight}}>Deneme</Text>

export default class Profile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                    <TouchableOpacity style={styles.button}>
                            <Text>SIGN UP</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 200,
        height: 200
    }
});
