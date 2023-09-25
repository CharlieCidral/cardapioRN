import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator screenOptions={{headerShown:true}} >
      <Stack.Screen name="Home" component={HomeList}/>
      <Stack.Screen name="HomeProducts" component={HomeProducts} />
    </Stack.Navigator>
  );
}