import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Button,
  Alert,
} from "react-native";
const { width } = Dimensions.get("window");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordValid: false,
    };
  }


  render() {
    return (  

      <View style={styles.container}>
            <Text style={styles.title}>Form App</Text>

        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({ email })}
          placeholder="entrez votre address mail"
        />

        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({ password })}
          placeholder="entrez votre mot de passe"
        />
        <Button
          style={styles.button}
          title="Sign In"
          onPress={() => Alert.alert("Bienvenu")}
          ><Text style={styles.buttonText}>Sign In</Text></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    color: "green",
    fontWeight: "200",
    fontSize: 50,
    padding: 20,

  },
  input: {
    width: 500,
    fontSize: 16,
    height: 36,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderColor: "#888888",
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3B5998",
    width: 200,
    height: 50,
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 20,
  },
});

export default App;
