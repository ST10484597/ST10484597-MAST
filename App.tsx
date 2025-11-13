import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ManageMenuScreen from "./screens/ManageMenuScreen";
import GuestFilterScreen from "./screens/GuestFilterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Manage Menu" component={ManageMenuScreen} />
<Stack.Screen name="Guest Filter" component={GuestFilterScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}
