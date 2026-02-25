  import { View, Text, Switch, StyleSheet } from "react-native";
import { useState } from "react";

export default function Index() {

  // Step 1: Create state variable
  const [isDark, setIsDark] = useState(false);

  return (
    <View style={isDark ? styles.dark : styles.light}>

      {/* Step 2: Title */}
      <Text style={styles.textLight}>
        Dark Mode & Light Mode Text
      </Text>

      {/* Step 3: Switch */}
      <Switch
        value={isDark}
        onValueChange={(value) => setIsDark(value)}
      />

      {/* Step 4: Hello text */}
      <Text style={isDark ? styles.textDark : styles.textLight}>
        Hello World Text
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  light: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  dark: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  textLight: {
    color: "black",
    fontSize: 18
  },

  textDark: {
    color: "white",
    fontSize: 18
  }

});