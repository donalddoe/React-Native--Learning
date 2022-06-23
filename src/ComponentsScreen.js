import React from "react";
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';


const ComponentsScreen = () => {
  const name = 'Donald'
  return (
    <View>
    <Text style={styles.text}>Getting started with React Native</Text>
    <Text style={styles.name}>My name is {name}</Text>
    </View>
  )
}

export default ComponentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'start',
  },
  text: {
    fontSize: 45
  },
  name: {
    fontSize: 20
  },
  textStyle: {
    marginVertical: 50
  }
});

