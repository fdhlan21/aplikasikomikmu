// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';


function HalamanRegister({navigation}) {
  return (
    <View style={{ flex:1 , backgroundColor:colors.primary,  }}>


<View  style={{flexDirection:'row', padding:10, backgroundColor:colors.header, paddingHorizontal:0, paddingVertical:5, borderBottomRightRadius:10, borderBottomLeftRadius:10}} >
<View style={{flexDirection:'row', padding:10,  paddingLeft:125}}>
<Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:30,}}>Register</Text>
</View>
</View>

<TextInput style={{margin:20, backgroundColor:colors.white, borderRadius:10, fontFamily:'Alata-Regular', paddingLeft:10, marginBottom:2, marginTop:40, color:colors.black}} placeholder='Nama Lengkap'  placeholderTextColor='gray' />
<TextInput style={{margin:20, backgroundColor:colors.white, borderRadius:10, fontFamily:'Alata-Regular', paddingLeft:10, marginBottom:2,  color:colors.black}} placeholder='Username'  placeholderTextColor='gray' />
<TextInput style={{margin:20, backgroundColor:colors.white, borderRadius:10, fontFamily:'Alata-Regular', paddingLeft:10, marginBottom:2,  color:colors.black}} placeholder='E-mail'  placeholderTextColor='gray' />
<TextInput style={{margin:20, backgroundColor:colors.white, borderRadius:10, fontFamily:'Alata-Regular', paddingLeft:10, marginBottom:2,  color:colors.black}} placeholder='Password'  placeholderTextColor='gray' secureTextEntry={true}  />



<View style={{flexDirection:'row', padding:10,paddingLeft:20,  marginTop:100}}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanPertanyaanSatu')}    style={{padding:10, backgroundColor:colors.header, paddingHorizontal:123, paddingVertical:10, borderRadius:10,}}>
<Text style={{color:colors.white, fontSize:20, fontFamily:'Alata-Regular'}}>Register</Text>
</TouchableOpacity>
</View>




    </View>
  );
}

export default HalamanRegister;