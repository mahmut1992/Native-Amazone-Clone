import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      colors={["#88dae0", "#98e1d6", "#9ee4d4"]}
    >
      <View style={styles.inputBox}>
        <View style={styles.row}>
          <Ionicons name="search" size={24} color="black" />
          <TextInput
            placeholder="search Amazon"
            placeholderTextColor={"#848484"}
            style={styles.textInput}
          />
        </View>
        <AntDesign name="scan1" size={24} color="black" />
      </View>
      <Feather name="mic" size={24} color="black" />
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderColor: "#a1bcc0",
    borderWidth: 1,
    width: "92%",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    padding: 10,
  },
});
