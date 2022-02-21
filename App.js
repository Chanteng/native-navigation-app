import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Details from './screens/Details'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = () => {
 
  const Tab = createBottomTabNavigator();
  
  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Details" component={Details} />
      </Tab.Navigator>
    );
  }
  return (
   <NavigationContainer>
     <StatusBar barStyle='dark-content' backgroundColor={"white"} />
    <MyTabs />
    
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})