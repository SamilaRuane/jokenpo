import React, { Component } from 'react';
import {
  View,
  Image,
  Text, 
  StyleSheet
} from 'react-native';


export default class Icon extends Component {

  render (){

    if(this.props.choice == 'Pedra'){
      return (
        <View style = {Styles.mainSquare} > 
            <Text style={Styles.textPlayer}>{this.props.player}</Text>
            <Image source={require('../../images/pedra.png')} />
        </View>
        );
    }else if(this.props.choice == 'Papel'){
      return (
        <View style = {Styles.mainSquare} >
            <Text style={Styles.textPlayer}>{this.props.player}</Text>
            <Image source={require('../../images/papel.png')} />
        </View>
        );
    }else if(this.props.choice == 'Tesoura'){
      return (
        <View style = {Styles.mainSquare}>
            <Text style={Styles.textPlayer}>{this.props.player}</Text>
            <Image source={require('../../images/tesoura.png')} />
        </View>
        );
    }else{
      return false;
    }
  }
}

const Styles = StyleSheet.create ({ 

	textPlayer: {
          fontSize: 20, 
          margin: 10,
          alignItems: 'center'
        },
        mainSquare: {
          alignItems: 'center'
        }
})
