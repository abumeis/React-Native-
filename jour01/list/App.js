import { StatusBar } from "expo-status-bar";
import React from "react";
import { View,StyleSheet,Text,FlatList} from "react-native";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bled: [],
    };
  }

  componentDidMount() {
    this.getCountry();
  }

  getCountry() {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          bled: res,
        });
        console.log(res);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Wolrld countries</Text>

        <FlatList
          data={this.state.bled}
          renderItem={({ item}) => (
            <View>
              <Text style={styles.bled}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    fontSize:50,
    paddingBottom:60,
    
  },
  bled:{
 color:"green"
  }
});

export default App;
