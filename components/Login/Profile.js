import React from 'react'
import { StatusBar, Text } from 'react-native';

export default class Profile extends React.Component {
    render() {
        return (
            <Text style={{marginTop: StatusBar.currentHeight}}>Deneme</Text>
        );
    }
}
