import { View, StyleSheet, SafeAreaView } from "react-native";
import SignIn from "./components/SignIn";


export default function SignInScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text> "hello world" </Text>
        <SignIn />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Adjust the background color as needed
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center', // Center the contents horizontally
    justifyContent: 'center', // Center the contents vertically
  },
});
