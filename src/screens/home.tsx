import React from 'react'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import { StyleSheet, Text, View, Button } from 'react-native'

interface Props extends StackScreenProps<any, any>{};

export default function home({navigation}:Props) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <Text>Home Screen</Text>
        <Button
          title='Go to pagina 1'
          onPress={()=> navigation.navigate('Pagina1Screen')}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({ container: { flex: 1, paddingHorizontal: 16 }});