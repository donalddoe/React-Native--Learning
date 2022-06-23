import React from "react";
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({navigation}) {
  return (
      <View style={styles.container}>
      <Button  title='Go to Components Demo' onPress={() => navigation.navigate('Component')}  />
      <Button  title='Go to Lists Demo' onPress={() => navigation.navigate('List')}  />
      <Button  title='Go to Image Screen Demo' onPress={() => navigation.navigate('Image')}  />
      <Button  title='Go to Counter Demo' onPress={() => navigation.navigate('Counter')}  />
      <Button  title='Go to Colors Demo' onPress={() => navigation.navigate('Color')}  />
      <Button  title='Go to Square Demo' onPress={() => navigation.navigate('Square')}  />
      <Button  title='Go to Text Demo' onPress={() => navigation.navigate('Text')}  />
     
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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

