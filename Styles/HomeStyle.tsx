  import { StyleSheet } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1a1a1a',
    },
    title: {
      fontSize: 36,
      marginBottom: 30,
      color: '#00e6e6',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      letterSpacing: 2,
      textShadowColor: 'rgba(0, 230, 230, 0.75)',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 5,
    },
    text: {
      fontSize: 20,
      color: '#e0e0e0',
      fontFamily: 'Montserrat',
      marginBottom: 20,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#333',
      padding: 15,
      borderRadius: 8,
      width: '60%',
      alignItems: 'center',
      marginVertical: 12,
      shadowColor: '#00e6e6',
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
    },
    buttonText: {
      color: '#00e6e6',
      fontSize: 18,
      fontFamily: 'Roboto',
      fontWeight: '600',
      letterSpacing: 1.5,
    },

  });

  export default styles;
