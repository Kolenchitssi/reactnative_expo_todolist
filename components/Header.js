import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>To-do List Mobile </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 38,
    height: "10%",
    width: "100%",
    borderTopColor: "#beb",
    borderBottomColor: "#060",
    borderWidth: 3,
    borderTopWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: "#329B21",

    borderBottomRightRadius: "95%",
  },

  text: {
    fontSize: 22,
    color: "#fff",
    fontWeight: 900,
  },
});
