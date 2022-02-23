import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import Home from "./screens/Home";
import Details from "./screens/Details";
import About from "./screens/About";
import Contact from "./screens/Contact";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeTab = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeTab.Navigator screenOptions={{ header: () => null }}>
      <HomeTab.Screen name="Home" component={Home} />
      <HomeTab.Screen name="Details" component={Details} />
    </HomeTab.Navigator>
  );
};

export default App;
