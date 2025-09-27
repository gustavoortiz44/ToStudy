import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function screen1() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <Text>Screen1</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({ container: { flex: 1, paddingHorizontal: 16 }});