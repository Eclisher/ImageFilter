import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DishCard from './DishCard';

const DishList = () => {
 const dishes = [
    { id: 1, name: 'Pizza', price: 12, rating: 4.5, image: require('../assets/images/HEI.png') },
    { id: 2, name: 'Pasta', price: 8, rating: 4.0, image: require('../assets/images/HEI.png') },
    { id: 3, name: 'Burger', price: 10, rating: 4.2, image: require('../assets/images/HEI.png') },
    { id: 4, name: 'Salad', price: 7, rating: 4.3, image: require('../assets/images/HEI.png') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nos Menu</Text>
      <DishCard dishes={dishes.slice(0, 4)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  moreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#888',
    marginTop: 10,
  },
});

export default DishList;
