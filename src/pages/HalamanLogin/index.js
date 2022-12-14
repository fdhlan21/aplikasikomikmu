// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';


function HalamanLogin({navigation}) {
  return (
    <View style={{ flex:1 , backgroundColor:colors.primary,  }}>
    
    <View style={{flexDirection:'row', padding:10, marginTop:150,paddingLeft:40}}>
<Image  style={{width:284, height:48,  }}  source={require('../../assets/img/KOMIKMU2.png')}/>
</View>

<View style={{flexDirection:'row', padding:10,  marginTop:120 }}>

<Text style={{color:colors.white, fontFamily:'Alata-Regular', paddingLeft:145, fontSize:20}}>Login</Text>

</View>

<TextInput style={{ margin:20, backgroundColor:colors.white, borderRadius:10, color:colors.black, borderWidth:1, fontFamily:'Alata-Regular' , paddingLeft:10, }} placeholder='Username' placeholderTextColor='grey' />
<TextInput style={{ margin:20, backgroundColor:colors.white, borderRadius:10, color:colors.black, borderWidth:1, fontFamily:'Alata-Regular', paddingLeft:10 }} secureTextEntry={true}   placeholder='Password' placeholderTextColor='grey' />

<View style={{flexDirection:'row', padding:10,paddingLeft:20}}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')}  style={{padding:10, backgroundColor:colors.header, paddingHorizontal:135, paddingVertical:10, borderRadius:10,}}>
<Text style={{color:colors.white, fontSize:20, fontFamily:'Alata-Regular'}}>Login</Text>
</TouchableOpacity>
</View>


<View style={{flexDirection:'row', padding:10, paddingLeft:90}}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanRegister')}    style={{}}>
<Text style={{color:colors.white, fontSize:10, fontFamily:'Alata-Regular'}}>Belum punya akun? Silakan daftar disini</Text>
</TouchableOpacity>
</View>

    </View>
  );
}

export default HalamanLogin;