import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Employe from './Employe';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator>
    {/* <Tab.Screen name="Home" component={Home} /> */}
    <Tab.Screen name='HomeScreen' component={HomeScreen} />
    <Tab.Screen name="Employee" component={Employe} />
    <Tab.Screen name='SettingsScreen' component={SettingsScreen} />
  </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})