import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const Categorias = () => {
  return (
        <View style={styles.container}>
            <Text style={styles.texto_entrada}>{'Categorias'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#7054B6',
    padding:16,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  texto_entrada:{
    fontWeight:'bold',
    fontSize:30,
    marginBottom:10,
    textAlign:'center',
  }
});

export default Categorias;