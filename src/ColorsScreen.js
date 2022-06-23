import React, {useState} from "react";
import { StyleSheet, View, FlatList, Button } from 'react-native';


const ColorsScreen = () => {
const [colors, setColors] = useState([])
console.log(colors);
  return ( 
    <View style={styles.container}>
    <Button title="Add a Color" onPress={() => {
      setColors([...colors, randomRgb()]);
    }} />
    <FlatList 
    keyExtractor={(item) => item}
      data={colors}
      renderItem={({item}) => {
        return  <View style={{height: 100, width: 100, backgroundColor: item, marginTop: 10,}} />
      
      }}
    />
    </View>
  )
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256 );
  const green = Math.floor(Math.random() * 256 );
  const blue = Math.floor(Math.random() * 256 );

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  }
});

export default ColorsScreen;