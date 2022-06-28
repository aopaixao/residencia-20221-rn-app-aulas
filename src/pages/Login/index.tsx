import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Text, Input, Icon, Button} from 'react-native-elements';
import { LoginService } from '../../services/LoginService';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');  
  const [senha, setSenha] = useState('');  

  const handleLogin = async (email:string, senha:string) => {
    console.log(`handleLogin - Email: ${email} - Senha: ${senha}`);

    const respostaLogin = await LoginService(email, senha);
    if(!respostaLogin){
      Alert.alert(
        "Erro",
        "",
        [
          { text: "OK"},
          { text: "Não foi possível realizar o login."},
        ]
      );
    }else{
      navigation.navigate('HomeScreen', {
        screen: 'TabNavigationScreen',
        params: {
          screen: 'HomeTabScreen',
          params:{
            token: respostaLogin.token,
          }
        },
      });
    }
  }

  return (
        <View style={styles.container}>
            <Text style={styles.texto_entrada}>{'Bem-vindo'}</Text>
            <Input
              placeholder='E-mail'
              onChangeText={setEmail}
              value={email}
              leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24} />}
              inputStyle={styles.inputs}
              placeholderTextColor={'black'}
             />
            <Input
              placeholder='Senha'
              onChangeText={setSenha}
              value={senha}
              leftIcon={<Icon name='key' color='#000' type='font-awesome' size={24} />}
              inputStyle={styles.inputs}
              placeholderTextColor={'black'}
             />
             <Button 
              title='Entrar'
              onPress={() => handleLogin(email, senha)} 
              titleStyle={styles.buttons}
              buttonStyle={styles.buttons}
              containerStyle={styles.buttonsContainerStyle}
             />
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
  },
  inputs:{
    color:'#000',
  },
  buttonsContainerStyle: {
    width: '85%',
    alignSelf: 'center',
  },
  buttons: {
    color: '#fff',
    backgroundColor: '#190152',
    borderRadius: 5,
    width:'100%',
  },
});

export default Login;