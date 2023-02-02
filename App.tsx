import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

// Components
import { Ligga } from "./src/pages/Ligga";
import { Todo } from "./src/pages/Todo";

// Types
type RootStackParamList = {
  Ligga: { userId: string };
  Todo: { userId: string };
};

// Stack
const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const colorOptions = {
    headerStyle: {
      backgroundColor: "#fa6400",
    },
    headerTintColor: "#000",
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Ligga">
          <RootStack.Screen
            name="Ligga"
            component={Ligga}
            options={colorOptions}
          />
          <RootStack.Screen
            name="Todo"
            component={Todo}
            options={colorOptions}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}
