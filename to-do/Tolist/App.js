import { React, useState } from "react";
import Card from "./components/Card";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Styles from "./Styles";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


// export const [task, setTask] = useState();
// export const [taskItems, setTaskItems] = useState([]);
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  // function to append a text to the array
  const addText = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
    console.log(task);
  };

  // function to delete a task
  const deletetask = (index) => {
    let indexCopy = [...taskItems];
    indexCopy.splice(index, 1);
    setTaskItems(indexCopy);
  };

  return (
    <View style={Styles.container}>
      {/* This is where the heading appears */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={Styles.heading}>
        <Text style={Styles.heading}>Today's Task</Text>
      </View>

      {/* This is where the tasks appear */}
      <View style={Styles.tasks}>
       
        {
        taskItems.map((item, index) => {
          return(
            <TouchableOpacity onPress={() => deletetask(index)}>
              <Card Text={item} key={index} />
            </TouchableOpacity>
          )
        })
        }
      </View>
      </ScrollView>
      {/* This is where you write the tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={Styles.wrapper}
      >
        <TextInput
          placeholder={"write a task"}
          style={Styles.input}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
       

        {/* Add button */}
        <TouchableOpacity activeOpacity={0.5} onPress={() => addText()}>
          <View style={Styles.add}>
            <Text style={Styles.addButton}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}
