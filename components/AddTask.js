import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddTask({ btnAddHandler }) {
  const [text, setText] = useState("");
  const onChangeHandler = (textValue) => {
    setText(textValue);
  };
  return (
    <View style={styles.main}>
      <TextInput
        style={styles.text}
        onChangeText={onChangeHandler}
        placeholder="add task"
        value={text}
      />
      <Text
        style={styles.btn}
        onPress={() => {
          if (text.length > 0) {
            btnAddHandler(text);
          }
          setText("");
        }}
      >
        +
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#eeffee",
    borderRadius: 4,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    padding: 8,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: "#87ECE2",
  },

  text: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
    fontSize: 12,
    backgroundColor: "#fff",
    color: "#021",
  },

  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,

    fontWeight: 900,
    fontSize: 35,
    paddingBottom: 6,

    borderWidth: 2,
    borderColor: "#B4F7A9",
    borderRadius: "30%",

    color: "#efe",
    backgroundColor: "#329B21",
  },
});
