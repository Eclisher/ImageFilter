// HomeScreen.js
import React from 'react';
import { ScrollView, View } from 'react-native';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Home from '../../components/Home';
import Category from '../../components/Category';
import DishCard from '../../components/DishCard';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <Home />
        <Category />
        <DishCard />
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default HomeScreen;