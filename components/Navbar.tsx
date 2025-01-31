import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HomeScreen} from '../screens/HomeScreen.tsx';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
       <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate( <HomeScreen />)}
        >
          <Ionicons name="home-outline" size={24} color="black" />
          <Text style={styles.label}>Home</Text>
        </TouchableOpacity>




        <TouchableOpacity style={styles.button}>
          <Ionicons name="search-outline" size={24} color="black" />
          <Text style={styles.label}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text style={styles.label}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.label}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    elevation: 10,
  },
  button: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: 'black',
  },
});

export default Navbar;
