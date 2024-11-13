import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import checkuser from "../../api/user";  

 function SignIn() {
  const [user, setUser] = useState(null); 
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState(""); 
  const [errorMessage, setErrorMessage] = useState("");  


  const handleLogin = async () => {
    try {
      const user = await checkuser(email, password); 
      if (user) {
        setUser(user);
        setErrorMessage(""); 
      } else {
        setErrorMessage("Invalid email or password.");  
      }
    } catch (error) {
      setErrorMessage("An error occurred, please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleLogin} />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}  
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});
