import { StyleSheet, Text, View } from "react-native";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

export default function App() {
  return (
    <View style={styles.main}>
      <Header />
      <List />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#B4F7A9",
  },
  text: {
    color: "#264",
  },
});

// создаешь новый терминал и пишешь expo build:android
// в package name пишешь com.example.projectname
