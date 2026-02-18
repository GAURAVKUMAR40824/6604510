 import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card(props: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.price}>₹{props.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "green",
  },
});
