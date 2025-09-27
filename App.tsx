// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import  StackNavigator  from './src/navigator/StackNavigator' ;

export default function App() {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
    //     <Text>App para testing</Text>
    //   </SafeAreaView>
    // </SafeAreaProvider>

    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({ container: { flex: 1, paddingHorizontal: 16 }});