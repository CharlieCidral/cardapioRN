import React, { Component } from 'react';
import { View, Pressable, FlatList, SafeAreaView, StyleSheet, Image, Text } from 'react-native';

export default class HomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[
        {
          key:1,
          title:'Pratos Executivos',
          img:require('../assets/images/tipos/pe.png'),
          description:'Pratos alta classe da casa.',
          bg:'#421918',
          products:[
            {key:1, name:'Mole Poblano', img:require('../assets/images/cardapio/pe/executivos_frang_.png')},
            {key:2, name:'Caviar “Almas” Beluga', img:require('../assets/images/cardapio/pe/executivos_peix_.png')},
            {key:3, name:'Kobe beef', img:require('../assets/images/cardapio/pe/executivos_picanh_.png')},
          ]
        },
        {
          key:2,
          title:'Saladas',
          img:require('../assets/images/tipos/saladas.png'),
          description:'Mantenha sua saude em dia com nosso menu de saladas.',
          bg:'#357e3f',
          products:[
            {key:1, name:'Florette Sea & Earth', img:require('../assets/images/cardapio/saladas/salada_aguadoc_.png')},
            {key:2, name:'Salmão com molho de maracujá', img:require('../assets/images/cardapio/saladas/salada_salma.png')},
            {key:3, name:'Tropical Snacks', img:require('../assets/images/cardapio/saladas/salada-fr.png')},
            {key:4, name:'Florette Sea & Earth', img:require('../assets/images/cardapio/saladas/salada_aguadoc_.png')},
            {key:5, name:'Salmão com molho de maracujá', img:require('../assets/images/cardapio/saladas/salada_salma.png')},
            {key:6, name:'Tropical Snacks', img:require('../assets/images/cardapio/saladas/salada-fr.png')},
            {key:7, name:'Florette Sea & Earth', img:require('../assets/images/cardapio/saladas/salada_aguadoc_.png')},
            {key:8, name:'Salmão com molho de maracujá', img:require('../assets/images/cardapio/saladas/salada_salma.png')},
            {key:9, name:'Tropical Snacks', img:require('../assets/images/cardapio/saladas/salada-fr.png')},
          ]
        },
        {
          key:3,
          title:'Bebidas',
          img:require('../assets/images/tipos/bebidas.png'),
          description:'Bebidas variadas.',
          bg:'#26345d',
          products:[
            {key:1, name:'Henri IV DHCG Champagne', img:require('../assets/images/cardapio/bebidas/capirosc_3.png')},
            {key:2, name:'Mendis Coconut Brandy', img:require('../assets/images/cardapio/bebidas/cookies_crea.png')},
            {key:3, name:'Macallan M', img:require('../assets/images/cardapio/bebidas/morango_gd.png')},
          ]
        },
        {
          key:4,
          title:'Sobremesas',
          img:require('../assets/images/tipos/sobremesa.png'),
          description:'Sobremesa para completar a refeição?',
          bg:'#978029',
          products:[
            {key:1, name:'Frrrozen Haute', img:require('../assets/images/cardapio/sobremesas/delicia_gelada_gd.png')},
            {key:2, name:'Morangos Arnaud', img:require('../assets/images/cardapio/sobremesas/creme_papaya_cassis_gd.png')},
            {key:3, name:'Fruitcake com diamantes', img:require('../assets/images/cardapio/sobremesas/brownie_gd.png')},
          ]
        },
      ]
    };
  }
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({item}) => <Lista data={item} navigation={this.props.navigation}/>}
        />
      </SafeAreaView>
    );
  }
}

class Lista extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.clicou = this.clicou.bind(this);
  }

  clicou = () => {
    this.props.navigation.navigate('HomeProducts', {title:this.props.data.title, products:this.props.data.products});
  }

  render() {
    return (
      <Pressable
          underlayColor={'#FCFCFC'}
          style={[styles.listaItem, {backgroundColor:this.props.data.bg}]}
          onPress={this.clicou}
        >
        <View style={styles.categoryRow}>
          <Image source={this.props.data.img} style={styles.listaImgs} />
          <View style={styles.listaTexts}>
            <Text style={styles.listaTitle}>{this.props.data.title}</Text>
            <Text
              style={styles.listaDescription}>{this.props.data.description}</Text>
          </View>
        </View>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  listaItem:{
    height:150,
    justifyContent:'center'
  },
  listaImgs:{
    width:64,
    height:64,
    marginLeft:20,
    marginRight:20
  },
  categoryRow:{
    flexDirection:'row'
  },
  listaTitle:{
    color:'#AAA',
    fontSize:24,
    fontWeight:'500'
  },
  listaDescription:{
    color:'#EEE',
    fontSize:18,
    fontWeight:'400',
  },
  listaTexts:{
    flex:1
  }
});