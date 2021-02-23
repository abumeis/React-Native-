
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView,Image,Button,Alert,ActivityIndicator  } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      
        <Image
          style={styles.img}
          source={require("./img/konexio.png")}
        />
        <Image
          style={styles.img}
          source={{
            uri:
              "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
          }}
        />
        <View>
        <Text style={styles.text1}>My first </Text>
        <Text style={styles.text2}>React Native </Text>
        <Text style={styles.text3}>App</Text>
        <StatusBar style="auto" />
        <Button
        title="Cliquez ici"
        onPress={() => Alert.alert("J'ai Cliqué")}
      />
            <ActivityIndicator size="small" color="#2196F3" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "black",
    textAlign:"center",
  
  },
  text1: {
    fontSize: 30,
    color:"white"
  },
  text2: {
    textAlign: "center",
    color:"white"
  },
  text3: {
    fontWeight: "bold",
    color:"white"

  },
  img:{
    width:200,
    height:60,
    marginTop:50
  }
});







