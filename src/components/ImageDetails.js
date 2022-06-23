import React from "react";

import { StyleSheet, Text, View, Image } from 'react-native';

const ImageDetails = ({imageSource, title, imageScore}) => {
  return <View>
  <Image source={imageSource} />
  <Text>{title}</Text>
  <Text>Image Score - {imageScore}</Text>
  </View>
}

const styles = StyleSheet.create({});

export default ImageDetails;