import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {

    render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details',{obj:1})}
        />

        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login',{obj:1})}
        />

      </View>
    );
    }
  }