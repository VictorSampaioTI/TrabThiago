import React from 'react';
import { View, Text,TouchableOpacity,Button, Image, Linking } from 'react-native';
import { HomeScreenNavigationProp } from '../Screens/types';
import styles from '../Styles/HomeStyle';
import style from '../Styles/ImageStyle';

const email = 'victorsampaiom@gmail.com';
const HomeScreen = ({ navigation } : {navigation: HomeScreenNavigationProp })=> {
  return (
    <View style={styles.container}>
        <Image 
        source={require('../assets/foto.jpg')}
        style={style.image}
        resizeMode="cover"/>
            <Text style={styles.title}>Victor Sampaio</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaDois')}>
                <Text style={styles.buttonText}>Minhas Habilidades</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('http://linkedin.com/in/victor-sampaio-bb8b52215')}>
                  <Text style={styles.buttonText}>Linkedin</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://github.com/VictorSampaioTI')}>
                  <Text style={styles.buttonText}>Github</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`)}>
                  <Text style={styles.buttonText}>Email</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaTres')}>
                <Text style={styles.buttonText}>Sobre Mim</Text>
                </TouchableOpacity>

                </View>

  );
};

export default HomeScreen;
