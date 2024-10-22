import React from 'react';
import { Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boats = ({ name, description, icon_name, poster }) => {
  return (
    <ScrollView>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
        textAlign: 'center',
      }}>
        <Icon name={icon_name} size={20} color="#909090" /> {name}
      </Text>
      <Image source={poster} style={{
        width: '100%',
        height: 250,
        borderRadius: 8,
        marginBottom: 15,
      }} />
      <Text style={{
        fontSize: 16,
        color: '#555',
        lineHeight: 22,
        paddingHorizontal: 10,
      }}>
        {description}
      </Text>
    </ScrollView>
  );
};

export default Boats;
