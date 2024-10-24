import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Signin } from './signin';


export default function App() {

  return (
    <View style={styles.container}>
      <Text>Welcome to Shredule!</Text>
      <Link to="components/Signin">
        <Button title="Sign In" />
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
