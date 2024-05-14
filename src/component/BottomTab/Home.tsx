import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Employe from './Employe';



const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Employee" component={Employe} />
  </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})