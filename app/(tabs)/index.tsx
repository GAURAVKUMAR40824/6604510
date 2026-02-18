 import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../Card";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.Title}>clip-prop</Text>

      <Card name="Shoes" price="1000" />
      <Card name="T-Shirt" price="1000" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },

  Title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
});
