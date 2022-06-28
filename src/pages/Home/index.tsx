import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Text, Card} from 'react-native-elements';
import AxiosInstance from '../../api/AxiosInstance';

type CategoriaType = {
  idCategoria: number;
	nomeCategoria: string;
	nomeImagem: string;
}

const Home = ({route, navigation}) => {
  //console.log('Params: ' + JSON.stringify(route));
  //console.log('Token: ' + token);
  const { token } = route.params;
  const [categoria, setCategoria] = useState<CategoriaType[]>([]);

  useEffect(() => {
    getDadosCategoria();
  }, []);

  const getDadosCategoria = async () => {
    AxiosInstance.get(
      `/categoria`,
      { headers: {"Authorization" : `Bearer ${token}`} }
    ).then( result =>{
      console.log('Dados das categorias: ' + JSON.stringify(result.data));
      setCategoria(result.data);
    }).catch((error) => {
      console.log("Erro ao carregar a lista de categorias - " + JSON.stringify(error));
    });
  }
  
  return (
        <ScrollView style={styles.container}>
          <ScrollView contentContainerStyle={styles.content_container} style={styles.scroll_categorias} horizontal={true}>
            {
              categoria.map((k, i) => (
                <TouchableOpacity key={i}
                  onPress={ () => console.log(`Categoria ${k.nomeCategoria} foi clicada`)}
                  style={styles.botao_categoria}
                >
                  <View style={styles.view_itens_categoria}>
                    <Text style={styles.texto_nome_categoria}>{k.nomeCategoria}</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
          <Text style={styles.txt_title}>
            {'Recentes'}
          </Text>
          <ScrollView horizontal={true} style={styles.scroll_container_recentes} >
            <Card containerStyle={styles.card_container}>
              <Card.Image
                style={styles.img_card}
                source={require('../../assets/img-icon.jpg')} />
              <Card.Divider />
              <Card.Title style={styles.card_title}>
                Título
              </Card.Title>
              <Text style={styles.descricao_card}>
                Descrição
              </Text>
            </Card>
            <Card containerStyle={styles.card_container}>
              <Card.Image
                style={styles.img_card}
                source={require('../../assets/img-icon.jpg')} />
              <Card.Divider />
              <Card.Title style={styles.card_title}>
                Título
              </Card.Title>
              <Text style={styles.descricao_card}>
                Descrição
              </Text>
            </Card>
            <Card containerStyle={styles.card_container}>
              <Card.Image
                style={styles.img_card}
                source={require('../../assets/img-icon.jpg')} />
              <Card.Divider />
              <Card.Title style={styles.card_title}>
                Título
              </Card.Title>
              <Text style={styles.descricao_card}>
                Descrição
              </Text>
            </Card>
            <Card containerStyle={styles.card_container}>
              <Card.Image
                style={styles.img_card}
                source={require('../../assets/img-icon.jpg')} />
              <Card.Divider />
              <Card.Title style={styles.card_title}>
                Título
              </Card.Title>
              <Text style={styles.descricao_card}>
                Descrição
              </Text>
            </Card>
          </ScrollView>
          <Text style={styles.txt_title}>
        {'Destaques'}
        </Text>
        <ScrollView horizontal={true} style={styles.scroll_container_recentes, {flex:1}} >
          <Card containerStyle={styles.card_destaque_container}> 
            <Card.Image 
              style={styles.img_card_destaque} 
              source={require('../../assets/img-icon.jpg')} 
            /> 
            <Card.Divider />         
            <Card.Title style={styles.card_destaque_title}>Título</Card.Title> 
            <Text style={styles.descricao_card_destaque}> 
              Descrição. 
            </Text> 
          </Card>
        </ScrollView>  
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#997AE5',
    padding:16,
  },
  scroll_categorias:{
    flexGrow: 0,
  },
  content_container:{
    justifyContent:'space-around',
    padding:10,
  },
  view_itens_categoria:{
    width:120,
    height:120,
    backgroundColor:'#ff0000',
    justifyContent:'center',
  },
  botao_categoria:{
    alignItems:'center',
  },
  texto_nome_categoria:{
    color:'#fff',
    textAlign:'center',
  },
  txt_title:{
    fontSize:16,
    fontWeight:'bold',
    marginTop:20,
    marginBottom:10,
    padding:0,
  },
  scroll_container_recentes: {
    flexGrow: 0,
  },
  card_container:{
    width:130,
    height:230,
    flexGrow: 0,
  },
  img_card:{
    padding:0,
    width:100,
    height:100
  },
  descricao_card:{
    marginBottom: 10,
  },
  card_title:{
    textAlign:'left',
  },
  card_destaque_container:{
    width:364,
    height:360,
    flexGrow: 0,
  },
  img_card_destaque:{
    padding:0,
    width:340,
    height:200
  },
  descricao_card_destaque:{
    marginBottom: 10,
  },
  card_destaque_title:{
    textAlign:'left',
  },
});

export default Home;