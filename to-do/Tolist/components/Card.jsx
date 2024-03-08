import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.cardStyles}>
      <View>
        <Text style={styles.Text}>{props.Text}</Text>
      </View>

      <View style={styles.Circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyles: {
    paddingHorizontal: 20,
    padding: 15,
    fontSize: 18,
    backgroundColor: "#FFF",
    borderRadius: 10,
    margin: 5,
    justifyContent: "space-between",
  },
  Text: {
    maxWidth: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    // alignItems:'center',
  },
  Circle: {
    width: 12,
    height: 12,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 10,
    // paddingRight: 10,
    marginBottom: 10,
    // flexWrap: "wrap",
    alignItems: "end",
  },
});
