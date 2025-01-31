import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import DishList from './DishList';


const DishCard = ({ dishes = [] }) => {
  if (!Array.isArray(dishes) || dishes.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <DishList />
      </View>
    );
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
      {dishes.map((dish) => (
        <View key={dish.id} style={styles.card}>
          <Image source={dish.image} style={styles.image} />
          <Text style={styles.name}>{dish.name}</Text>
          <Text style={styles.price}>{dish.price} $</Text>
          <Text style={styles.rating}>⭐ {dish.rating}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Détails" onPress={() => alert(`Détails pour ${dish.name}`)} />
            <Button title="Acheter" onPress={() => alert(`Vous avez acheté ${dish.name}`)} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: 250, // Augmenter la largeur des cartes
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 230,
    height: 150,
    borderRadius: 10,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginVertical: 4,
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
});

export default DishCard;
