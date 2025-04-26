import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.recentSearch}>{item.title} </Text>
      <Image style={styles.serviceImage} source={item.image} />
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 140,
    padding: 5,
    marginLeft: 8,
    borderRadius: 5,
  },
  recentSearch: {
    fontSize: 13,
    marginBottom: 8,
    color: "#000000",
  },
  serviceImage: {
    width: "100%",
    height: 130,
    borderRadius: 5,
  },
});
