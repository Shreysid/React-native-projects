import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Styles from "../Styles";


export default function Card(props) {
  return (
    <View style={Styles.cardStyles}>
      <View style={Styles.itemLeft}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={Styles.Circle}></View>
        </TouchableOpacity>
        <Text style={Styles.Text}>{props.Text}</Text>
      </View>
    </View>
  );
}

const clicked = () => {
  console.log("clicked");
};

