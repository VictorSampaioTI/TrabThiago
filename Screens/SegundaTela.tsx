import React from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import styles from '../Styles/StyleSegunda';
import { TelaDoisNavigationProp } from './types';
import style from '../Styles/ImageStyle';

const TelaDois = ({ navigation }: { navigation: TelaDoisNavigationProp }) => {
  const renderStars = (rating: number) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {[...Array(5)].map((_, index) => (
          <Text key={index} style={{ color: index < rating ? '#FFD700' : '#e0e0e0' }}>
            ★
          </Text>
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('../assets/foto.jpg')}
        style={style.image}
        resizeMode="cover"
      />

      <Text style={styles.title}>Minhas Habilidades:</Text>

      <Text style={styles.subtitle}>Linguagens de Programação:</Text>

      <Text style={styles.text}>Java: {renderStars(3)}</Text>
      <Text style={styles.text}>C++: {renderStars(3)}</Text>
      <Text style={styles.text}>CSS: {renderStars(3)}</Text>
      <Text style={styles.text}>HTML: {renderStars(3)}</Text>
      <Text style={styles.text}>MySQL: {renderStars(3)}</Text>
      <Text style={styles.text}>JavaScript: {renderStars(2)}</Text>
      <Text style={styles.text}>React: {renderStars(2)}</Text>
      <Text style={styles.text}>PHP: {renderStars(2)}</Text>

      <Text style={styles.subtitle}>Idiomas:</Text>

      <Text style={styles.text}>Português: {renderStars(5)}</Text>
      <Text style={styles.text}>Inglês: {renderStars(3)}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TelaDois;
