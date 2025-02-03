import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ViewShot from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  const [photo, setPhoto] = useState(null);
  const [filter, setFilter] = useState({});

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission pour utiliser la caméra est requise!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const applyFilter = (filterStyle) => {
    setFilter(filterStyle);
  };

  const savePhoto = async (ref) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission de stockage nécessaire!');
      return;
    }

    ref.capture().then(async (uri) => {
      await MediaLibrary.createAssetAsync(uri);
      Alert.alert('Succès', 'Photo enregistrée dans la galerie.');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capture d'Image</Text>

      <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
        <Text style={styles.buttonText}>📸 Prendre une photo</Text>
      </TouchableOpacity>

      {photo && (
        <ViewShot ref={(ref) => (this.viewShot = ref)} options={{ format: 'jpg', quality: 1 }}>
          <View style={[styles.imageContainer, filter]}>
            <Image source={{ uri: photo }} style={styles.image} />
          </View>
        </ViewShot>
      )}

      {photo && (
        <View style={styles.filtersContainer}>
          <Text style={styles.filterTitle}>Choisir un filtre :</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => applyFilter({})}>
              <Text style={styles.buttonText}>Aucun filtre</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => applyFilter({ filter: 'grayscale(100%)' })}>
              <Text style={styles.buttonText}>Grayscale</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => applyFilter({ filter: 'sepia(100%)' })}>
              <Text style={styles.buttonText}>Sepia</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => applyFilter({ filter: 'brightness(1.5)' })}>
              <Text style={styles.buttonText}>Brighten</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => applyFilter({ filter: 'contrast(200%)' })}>
              <Text style={styles.buttonText}>Contraste élevé</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {photo && (
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => savePhoto(this.viewShot)}>
          <Text style={styles.buttonText}>💾 Enregistrer la photo filtrée</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e8f5e9',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  captureButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
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
  filterButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  saveButton: {
    backgroundColor: '#f57c00',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
  },
});
