import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Signup from "./screens/Signup";

export default function App() {
  console.log("checking if the app is running");
  return (
    <View style={styles.container}>
      <Signup />
      {/* <Text style={{ color: "#FFFFFF" }}>Welcome to the App!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
