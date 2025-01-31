// components/Home.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/foods.jpg')} style={styles.heroImage} />
      <View style={styles.overlay}>
        <Text style={styles.slogan}>"On arrive à réaliser votre grand désir"</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: 250,
  },
  overlay: {
    position: 'absolute',
    top: 100,
    left: 20,
    right: 20,
    textAlign: 'center',
  },
  slogan: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Home;
