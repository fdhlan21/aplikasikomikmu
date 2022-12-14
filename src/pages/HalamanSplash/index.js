// In App.js in a new project

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';


function HalamanSplash({navigation}) {
  setTimeout(()=>{
    navigation.navigate('HalamanLogin');
  },1500)
  return (
    <View style={{ flex:1 , backgroundColor:colors.primary,  }}>
    
    <View style={{flexDirection:'row', padding:10, marginTop:290,  paddingLeft:40 }}>
<Image  style={{width:284, height:48,   }}  source={require('../../assets/img/KOMIKMU2.png')}/>
</View>
    </View>
  );
}

export default HalamanSplash;