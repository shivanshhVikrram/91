import React, { Component } from 'react';
import { View, StyleSheet,Dimensions, Text, FlatList,TouchableHighlight,Image } from 'react-native';
import { ListItem } from 'react-native-elements'
import MyHeader from '../components/MyHeader';
import {Card,CardImage} from 'react-native-cards';
import db from '../config'


// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;
export default class HomeScreen extends Component{
  constructor(){
    super()
    this.state = {
      allRequests : []
    }
  
  }

  

  

  render(){
    return(
      
      <View style={{flex:1}}>
        <MyHeader title="Maw and Paw"/>
        <View style={{flex:1}}>
        <Card style={{
          padding: 10,marginTop:30,backgroundColor:"#415136",color:"#82152b"
          }} isDark>
             <CardImage style={{fontSize:20,color:"red",marginTop:50}} 
             title ={"Adopt Me"} source={require('../assets/adopt.jpg')} />
         </Card>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#9900cc",
    shadowOffset: {
       width: 0,
       height: 8
     }
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor:'#FF69B4'
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  }
})
