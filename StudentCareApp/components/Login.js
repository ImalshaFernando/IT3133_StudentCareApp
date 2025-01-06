import { useNavigation } from "@react-navigation/native";
import { Button, PaperProvider, Text, TextInput } from "react-native-paper";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import { useState } from "react";
import { students } from '../assets/StudentsDb';

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    const user = students.find(
      (student) => student.username === username && student.password === password
    );
    if (user) {
      setErrorMessage(""); 
      navigation.navigate('Main', { user });
    } else {
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image
            style={styles.image}
            source={require('../assets/images/Logo.png')}
          />
        </View>
        <View style={styles.title}>
          <Text variant="displayMedium" style={styles.text}>Student Login</Text>
        </View>
        <View style={styles.inputfields}>
          <TextInput
            label="Username"
            mode="outlined"
            activeOutlineColor="#63625b"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            label="Password"
            mode="outlined"
            activeOutlineColor="#63625b"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button
            style={styles.button}
            mode="contained"
            onPress={handleLogin}
            labelStyle={styles.buttonText}
          >
            Login
          </Button>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>UoV © 2025</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  banner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: 250,
    height: 65,
    top: 10,
    position: 'absolute',
  },
  title: {
    flex: 1
  },
  text: {
    color: "black"
  },
  inputfields: {
    flex: 1,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonText: {
    color: "white",
  },
  button: {
    marginTop: 5,
    backgroundColor: "#520f4e"
  },
  errorText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
  scrollView: {
    flexGrow: 1,
  },
  footer: {
    flex: 1,
    bottom: 0,
    position: "absolute",
    backgroundColor: "#520f4e",
    width: "100%",
    alignItems: 'center',
    height: 30
  },
  footerText: {
    color: '#ffffff'
  }
});