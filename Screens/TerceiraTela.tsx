import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../Styles/StyleTerceira';
import { TelaTresNavigationProp } from '../Screens/types';

const TerceiraTela = ({ navigation }: { navigation: TelaTresNavigationProp }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>Sobre Mim</Text>
        <Text style={styles.description}>
          Olá! Meu nome é Victor Sampaio, tenho 23 anos e sou estudante de Análise e Desenvolvimento de Sistemas.
          Sou apaixonado por tecnologia, especialmente nas áreas de desenvolvimento IA, web e mobile. 
          Atualmente, estou aprimorando minhas habilidades em React, React Native e APIs REST, além de explorar novas 
          tecnologias para criar soluções eficientes.

          Recentemente, estou desenvolvendo um sistema de agendamento para barbearias, focado em otimizar o tempo dos profissionais 
          e facilitar a vida dos clientes. Tenho experiência com JavaScript, TypeScript e estou sempre buscando novos desafios 
          para aprender e evoluir.

          Além disso, sou uma pessoa organizada, comunicativa e gosto de trabalhar em equipe para solucionar problemas. 
          Meu objetivo é entrar no mercado como desenvolvedor, onde possa aplicar e expandir meus conhecimentos.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TerceiraTela;
