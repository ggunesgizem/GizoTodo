
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './src/pages/LoginPage';
import ScreenB from './src/pages/ScreenB.js';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

const Stack = createStackNavigator()

function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
        />
        <Stack.Screen
          name="ScreenB"
          component={ScreenB}      
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
};


export default App;
