import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Kolenchits Sergey 2022 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",

    height: "5%",
    width: "100%",
    paddingRight: 40,

    borderTopColor: "#beb",
    borderBottomColor: "#060",
    borderWidth: 3,
    borderTopWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopLeftRadius: "75%",

    backgroundColor: "#329B21",
  },

  text: {
    fontSize: 12,
    color: "#B4F7A9",
    fontWeight: 400,
  },
});
