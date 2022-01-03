import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import ListItem from "./ListItem";
import AddTask from "./AddTask";

export default function List() {
  const [list, setList] = useState([{ text: "Купить молоко", key: "1" }]);

  const btnAddHandler = (textV) => {
    setList((list) => {
      return [{ text: textV, key: Date.now().toString(36) }, ...list];
    });
  };

  const removeItemHandler = (key) => {
    setList((list) => {
      return list.filter((item) => item.key != key);
    });
  };
  return (
    <View style={styles.main}>
      <AddTask btnAddHandler={btnAddHandler} />

      <FlatList
        style={styles.flatList}
        data={list}
        renderItem={({ item }) => {
          return <ListItem el={item} removeItemHandler={removeItemHandler} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    overflow: "hidden",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    // height: "80%",
    width: "80%",
    marginTop: "16px",
    marginBottom: "16px",
    paddingLeft: 16,
    paddingTop: 12,
    paddingRight: 16,

    borderRadius: 8,
    borderBottomRightRadius: "30%",
    backgroundColor: "#fff",
  },

  flatList: {
    width: "100%",
  },
});
