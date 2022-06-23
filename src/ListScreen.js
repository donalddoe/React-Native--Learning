import React from "react";
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';



const ListScreen = () => {
  const friends = [
    {name: 'Friend #1', age: 20 },
    {name: 'Friend #2' , age: 45  },
    {name: 'Friend #3' , age: 32  },
    {name: 'Friend #4', age: 27 },
    {name: 'Friend #5', age: 53 },
    {name: 'Friend #6', age: 15 },
    {name: 'Friend #7', age: 18},
    {name: 'Friend #8', age: 62 },
    {name: 'Friend #9', age: 71 },
  ]

  return (
    <View>

    {/* <FlatList 
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(friend) => friend.name}
    data={friends} 
    renderItem={({item}) => {
      return <Text style={styles.textStyle}>{item.name}</Text>
    }} /> */}
    <FlatList 
    keyExtractor={(friend) => friend.name}
    data={friends} 
    renderItem={({item}) => {
      return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
    }} />
    {/* <StatusBar style="auto" /> */}
  </View>
  )
  
}


export default ListScreen;

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

