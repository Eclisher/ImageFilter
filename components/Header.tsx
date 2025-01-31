// components/Header.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
      <Image source={require('../assets/images/HEI.png')} style={{ width: 100, height: 50 }} />
      <TouchableOpacity>
        <Text style={{ fontSize: 16, color: 'blue' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
