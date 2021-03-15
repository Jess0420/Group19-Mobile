import * as React from 'react'; 
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, ImageBackground, Button, StyleSheet, Text, View } from 'react-native'; 
import {createDrawerNavigator} from '@react-navigation/drawer'; 
import {NavigationContainer} from '@react-navigation';  

function HomeScreen({navigation}) {
  
}

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source = {require('./assets/house.png')} style = {styles.image}>
      <StatusBar style="auto" />
        </ImageBackground>    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  image: 
  {
    flex: 1, 
    resizeMode: "cover", 
    justifyContent: "center", 
    width: 500
  },  
});
