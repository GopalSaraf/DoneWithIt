import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

export default function Screen({ children, style }) {
  return <View style={[styles.screen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});
