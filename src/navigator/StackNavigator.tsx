import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import home from '../screens/home';
import screen1 from '../screens/screen1';

const stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <stack.Navigator>
        <stack.Screen name='Home' component={home}/>
        <stack.Screen name='Pagina1Screen' component={screen1}/>
    </stack.Navigator>
  )
}

const styles = StyleSheet.create({})