import Card from "./components/Card";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* This is where the heading appears */}
      <View style={styles.heading}>
        <Text style={styles.heading}>Today's Task</Text>
      </View>
      {/* This is where the tasks appear */}
      <View style={styles.tasks}>
        <Card Text={'This is a text1'}/>
        <Card Text={'This is a text2'}/>
        <Card Text={'This is a text3'}/>
        <Card Text={'This is a text4'}/>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  heading: {
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom:3,
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasks: {
    marginTop:30,
  },
});
