import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [photo, setPhoto] = useState(null);
  const [filter, setFilter] = useState('none');

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission pour utiliser la caméra est requise!');
      return;
    }

    // Ouvrir la caméra pour prendre une photo
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const applyFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capture d'Image</Text>

      <Button
        title="Prendre une photo"
        onPress={takePhoto}
        color="#4CAF50"
        style={styles.button}
      />

      {photo && (
        <View style={styles.imageContainer}>
          <Text style={styles.imageTitle}>Photo capturée:</Text>
          <Image source={{ uri: photo }} style={[styles.image, { filter }]} />
        </View>
      )}

      {photo && (
        <View style={styles.filtersContainer}>
          <Text style={styles.filterTitle}>Choisir un filtre:</Text>
          <View style={styles.buttonGroup}>
            <Button title="Aucun filtre" onPress={() => applyFilter('none')} />
            <Button title="Grayscale" onPress={() => applyFilter('grayscale(100%)')} />
            <Button title="Sepia" onPress={() => applyFilter('sepia(100%)')} />
            <Button title="Invert" onPress={() => applyFilter('invert(100%)')} />
            <Button title="Blur" onPress={() => applyFilter('blur(5px)')} />

          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#fff',
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  filtersContainer: {
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
  },
  filterTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
});
