import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar} from 'react-native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';

import Inicio from './src/components/Inicio';
import Application from './src/components/App';
import { enableScreens } from 'react-native-screens';
enableScreens();

const Stack = createStackNavigator();

export default function App() {
  enableScreens();
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#111111"/>
    <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Inicio"
          >

            <Stack.Screen 
                name="Inicio" 
                component={Inicio} />

              <Stack.Screen 
                name={'Application'}
                component={Application} />
        
        </Stack.Navigator>


    </NavigationContainer>

    </>
  );
}


