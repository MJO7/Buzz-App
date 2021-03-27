import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class fb extends React.Component {
  pressMe = () => {
    this.props.navigation.navigate("Screen2");
  };
  render() {
    return (
      <View style={{ marginTop: 100, alignSelf: "center" }}>
        <TouchableOpacity
          onPress={() => {
            this.pressMe();
          }}
        >
          <Text>Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
