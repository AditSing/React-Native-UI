import React, { Platform } from 'react'
import { StyleSheet, Text, View, Icon } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Order, Splash, Account } from '../pages';
import { BottomNavigator } from '../components';
import { IconAccountActive, IconHome, IconHomeActive } from '../assets';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator 
      initialRouteName="Splash"  
      // tabBar={props => <BottomNavigator  {...props} />}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'list-box' : 'list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Beranda" 
        component={Home} 
      />
      <Tab.Screen name="Account" component={Account} options={{ headerShown: false }}/>
      <Tab.Screen name="Order" component={Order} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
