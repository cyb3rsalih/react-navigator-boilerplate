import React from "react";
import { Text, StyleSheet, View } from "react-native";

class CustomDrawerComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DRAWER WORKS!</Text>
      </View>
    );
  }
}

export default CustomDrawerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
