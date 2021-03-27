import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import fb from "./screens/fb";
import in1 from "./screens/in1";
import { Icon } from "react-native-elements";
import "react-native-vector-icons";
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
const switchN = createBottomTabNavigator(
  {
    fb: { screen: fb },
    in1: { screen: in1 },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const routeName = navigation.state.routeName;
        if (routeName == "fb") {
          return <Icon name="home" type="entypo" color={tintColor} />;
        } else if (routeName == "in1") {
          return <Icon name="home" type="entypo" color={tintColor} />;
        }
      },
      tabBarOptions: {
        activeTintColor: "black",
        inactiveTintColor: "grey",
      },
    }),
  }
);

const AppContainer = createAppContainer(switchN);
