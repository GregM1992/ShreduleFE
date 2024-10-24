import * as React from "react";
import checkuser from "../api/userAPI";
import { Stack } from "expo-router";

function SignIn() {
  const { user, setUser } = useState(null);
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");

  const handleLogin = async () => {
    const user = await checkuser(email, password);
    setUser(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <Stack>
  <View>
    <Form>
      <Input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <Input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <Button onClick={handleLogin}>Sign In</Button>
    </Form>

  </View>
     
    </Stack>
  );

}
