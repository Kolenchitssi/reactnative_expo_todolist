import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ListItem({ el, removeItemHandler }) {
  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => removeItemHandler(el.key)}
    >
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    minWidth: "100%",
    marginBottom: 10,

    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FFD1AF",

    backgroundColor: "#B4F7A9",
  },

  text: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    color: "#234",
    fontWeight: 900,
    textAlign: "left",
  },
});
