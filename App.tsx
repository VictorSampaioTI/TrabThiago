import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './Screens/HomeScreen';
import SegundaTela from './Screens/SegundaTela';
import TerceiraTela from "./Screens/TerceiraTela";


const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TelaDois" component={SegundaTela} options={{ headerShown: false }} />
        <Stack.Screen name="TelaTres" component={TerceiraTela} options={{ headerShown: false }}  />

      </Stack.Navigator>
    </NavigationContainer>
  )
}