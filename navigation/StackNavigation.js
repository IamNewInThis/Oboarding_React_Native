// navigation/StackNavigator.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import RegistroScreen from '../screens/RegistroScreen.js';
import HomeScreen from '../screens/HomeScreen.js';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Onboarding" options={{headerShown:false}} component={OnboardingScreen} />
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
        <Stack.Screen name="Registro" options={{headerShown:false}} component={RegistroScreen} />
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
