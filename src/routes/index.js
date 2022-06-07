import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Views/LoginScreen';
import HomeScreen from '../Views/HomeScreen';
import TodoListScreen from '../Views/TodoListScreen';
const Route = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TodoList" component={TodoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
