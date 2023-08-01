import {View, Text} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../container/Auth/Login.js';
import Otp from '../container/Auth/Otp.js';
import Signup from '../container/Auth/Signup.js';

// import Otp from '../container/Auth/Otp';
// import signup from '../container/Auth/signup';

const Router = () => {
  // Create a stack navigator
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Otp"
          component={Otp}
          screenOptions={{headerShown: true}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          screenOptions={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
