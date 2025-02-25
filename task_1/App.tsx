import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/Login/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Welcome to our data-secure app! Feel free to put your main password
        here!
      </Text>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
