
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentsScreen from './src/ComponentsScreen';
import CounterScreen from './src/CounterScreen';
import HomeScreen from './src/HomeScreen'
import ImageScreen from './src/ImageScreen';
import ListScreen from './src/ListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Component: ComponentsScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);


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
