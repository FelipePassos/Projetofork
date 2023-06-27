import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importações para navegar telas (relação 01)

import ScreenOne from '.src/ScreenOne.js';
import ScreenLogin from '.src/ScreenLogin.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenOne">
        <Stack.Screen
          name="ScreenOne"
          component={ScreenOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={ScreenLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
