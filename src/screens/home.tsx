import React from 'react'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import { StyleSheet, Text, View, Button } from 'react-native';

import Config from 'react-native-config';

interface Props extends StackScreenProps<any, any>{};

export default function home({navigation}:Props) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <Text>Home Screen Envs!</Text>
        <Button
          title='Go to pagina 1'
          onPress={()=> navigation.navigate('Pagina1Screen')}
        />

      {/* <Text testID="env-app-name">{APP_NAME}</Text>
      <Text testID="env-api">{API_URL}</Text>
      <Text testID="env-web">{WEB_URL}</Text>
      <Text testID="env-flag">NavV2: {String(FEATURES.navV2)}</Text> */}

      </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({ container: { flex: 1, paddingHorizontal: 16 }});