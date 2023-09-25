import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home';
import Contato from './src/Contato';
import Sobre from './src/Sobre';
import Horarios from './src/Horarios';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#015fd0',
          }}
        >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarIcon: ({color, size}) => (<Feather name="home" color={color} size={size}/>), headerShown:false}}
        />
        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{tabBarIcon: ({color, size}) => (<Feather name="mail" color={color} size={size}/>),}}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{tabBarIcon: ({color, size}) => (<Feather name="info" color={color} size={size}/>),}}
        />
        <Tab.Screen
          name="Horarios"
          component={Horarios}
          options={{tabBarIcon: ({color, size}) => (<Feather name="clock" color={color} size={size}/>),}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;