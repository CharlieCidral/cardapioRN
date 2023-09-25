import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image } from 'react-native';

export default class HomeProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:props.route.params.products
    };
  }
  componentDidMount() {
    const { route } = this.props;
    const { title } = route.params;
    console.log(route)
    // Set the header title dynamically
    this.props.navigation.setOptions({
      title: title,
    });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={this.state.list}
          renderItem={({item}) => <ProductItem data={item} />}
        />
      </SafeAreaView>
    );
  }
}

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.productsItem}>
        <Image resizeMode='contain' source={this.props.data.img} style={styles.productsImagem} />
        <Text style={styles.productsName}>{this.props.data.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#EEE'
  },
  productsItem:{
    height:100,
    backgroundColor:'#FFF',
    margin:10,
    borderRadius:5,
    padding:10,
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  productsImagem:{
    height:80,
    width:150
  },
  productsName:{
    fontSize:22,
  }
});