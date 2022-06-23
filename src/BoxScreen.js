import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return <View style={styles.parentStyle}>
    <View style={styles.viewOneStyle} />
    <View style={styles.viewTwoStyle} />
    <View style={styles.viewThreeStyle} />
  </View>
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 400,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    backgroundColor: 'red',
    height: 100, 
    width: 100

    // flex:4 

    },
    viewTwoStyle: {
    backgroundColor: 'green',
    height: 100, 
    width: 100,
    alignSelf: 'flex-end'
    },
    viewThreeStyle: {
      backgroundColor: 'purple',
      height: 100, 
      width: 100
    }
});

export default BoxScreen;