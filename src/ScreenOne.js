import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnotherScreenOne from './AnotherScreenOne';
import ScreenLogin from './ScreenLogin';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('ScreenLogin');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenOne" component={AnotherScreenOne} options={{ headerShown: false }} />
        <Stack.Screen name="ScreenLogin" component={ScreenLogin} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AnotherScreenOne = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./logo.png')} />
    </View>
  );
};

export default App;
