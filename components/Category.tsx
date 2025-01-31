import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const categories = [
  { name: 'Entrée', image: require('../assets/images/foods.jpg') },
  { name: 'Dessert', image: require('../assets/images/foods.jpg') },
  { name: 'Résistance', image: require('../assets/images/foods.jpg') },
  { name: 'Boisson', image: require('../assets/images/foods.jpg') },
  { name: 'Glace', image: require('../assets/images/foods.jpg') },
];

const Category = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notre Catégorie</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryContainer}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Category;
