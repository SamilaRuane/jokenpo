/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image, 
  StyleSheet
} from 'react-native'; 

import Top from './src/components/top';
import Icon from './src/components/icon';




export default class App extends Component{
  

constructor (props){
  super(props);

  this.state = {
    userChoice : '',
    computerChoice : '',
    result: ''
  }
}

jokenpo (valueUser){
 let  valueComputer = this.generateRandomChoice ();
 let resultCalculed = this.analyseResult(valueUser, valueComputer);

    this.setState ({
      userChoice : valueUser,
      computerChoice : valueComputer,
      result : resultCalculed
    });

}

analyseResult (user, computer){
      if (user == computer) 
        return "Empatou"
      
      let result; 

      if (computer == 'Pedra'){

          if(user == 'Papel'){
            result = 'You Win!!!!';
          }

          if(user == 'Tesoura'){
            result = 'You Lose!!!';
          }
      }

      if (computer == 'Papel'){
        if(user == 'Pedra'){
           result = 'You Lose';
          }

          if(user == 'Tesoura'){
            result = 'You Win !!!';
          }

      }

      if (computer == 'Tesoura'){
        if(user == 'Pedra'){
            result = 'You Win !!!!';
          }

          if(user == 'Papel'){
            result = 'You Lose !!!!';
          }

      }


      return result;

}

generateRandomChoice (){
  let randomNum = Math.random ();
  randomNum = Math.floor (randomNum * 10 % 2);

  switch (randomNum){
    case 0: return 'Pedra'
    case 1: return 'Papel'
    case 2: return 'Tesoura' 
  }
  
}

  render() {
    return (

      <View>      

        <Top></Top>

        <View style = {Styles.controlSquare}>

          <Button style = {Styles.controlButtons} title='Pedra'  onPress = { () => { this.jokenpo('Pedra') }} />
          <Button style = {Styles.controlButtons} title='Papel'  onPress = { () => { this.jokenpo('Papel') }} />
          <Button style = {Styles.controlButtons} title='Tesoura'  onPress = { () => { this.jokenpo('Tesoura') }} />
        
        </View>
        <View style = {Styles.mainSquare}>
            <Text style={Styles.resultText}> {this.state.result} </Text>

            <Icon choice = {this.state.userChoice} player = 'You' />
            <Icon choice = {this.state.computerChoice} player = 'Computer' />
           
        </View>
       
      </View>

    );
  }
}

const Styles = StyleSheet.create ({
        controlButtons: {
          width : 90
        },
        controlSquare: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10
        },
        resultText: {
          fontSize: 30,
          color: 'red',
          fontWeight: 'bold',
          height: 60
        },
        mainSquare: {
          alignItems: 'center'
        }''
      })


