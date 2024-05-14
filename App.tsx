import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import SplahScreen from './src/component/SplashScreen/SplahScreen';

import LoginScreen from './src/component/Login/LoginScreen';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './src/component/BottomTab/Home';
import Home from './src/component/BottomTab/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect (()=>{
    setTimeout(() => {
        setShowSplashScreen(false)
    },2000)
})
 
return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* {showSplashScreen ? 
          <Stack.Screen
            name="SplashScreen"
            component={SplahScreen}
            options={{headerShown: false}}
          />
        : null}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
