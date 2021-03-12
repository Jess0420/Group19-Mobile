import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

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
