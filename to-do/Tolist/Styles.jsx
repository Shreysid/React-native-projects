import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  heading: {
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 3,
    fontSize: 24,
    fontWeight: "bold",
  },
  tasks: {
    marginTop: 30,
    fontSize: 10,
  },
  wrapper: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%", //width pushes the button to the far end
  },
  input: {
    padding: 15,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    margin: 5,
  },
  add: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addButton: {
    fontSize:24,
  },

  cardStyles: {
    paddingHorizontal: 20,
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    margin: 5,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  Text: {
    maxWidth: "80%",
    fontSize: 14,
    marginLeft: 5,
    width: "100%",
  },
  Circle: {
    width: 12,
    height: 12,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 2,
    padding: 8,
    alignItems: "end",
  },
});
