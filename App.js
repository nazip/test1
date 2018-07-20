/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native-ui-lib'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
          <View flex paddingH-25 paddingT-120>
            <Text blue50 text20>Welcome</Text>
            <TextInput text50 placeholder="username" dark10/>
            <TextInput text50 placeholder="password1" secureTextEntry dark10/>
            <View marginT-100 center>
              <Button text70 white background-orange30 label="Login"/>
              <Button link text70 orange30 label="Sign Up" marginT-20/>
            </View>
          </View>
        );
  }
}
