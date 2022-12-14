// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';


function HalamanAkun({navigation}) {
  return (
    <View style={{ flex:1 , backgroundColor:colors.primary,  }}>


<View  style={{flexDirection:'row', padding:10, backgroundColor:colors.header, paddingHorizontal:0, paddingVertical:10, borderBottomRightRadius:10, borderBottomLeftRadius:10}} >


<View style={{flexDirection:'row', padding:10,  marginTop:18}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanHome')}    style={{marginLeft:10,}}>
    <Image   style={{width:10, height:18}}  source={require('../../assets/img/back.png')} />
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:10,  paddingLeft:100,}}>
<Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:30,}}>Akun</Text>
</View>

</View>

<View style={{flexDirection:'row', padding:5,  paddingLeft:30, marginTop:20}}>
<Text  style={{color:colors.white, fontFamily:'Alata-Regular', }} >Nama Lengkap</Text>
</View>

<TextInput  style={{margin:20, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', paddingLeft:10, }}  placeholder='Fadhlan' placeholderTextColor='gray'  />



<View style={{flexDirection:'row', padding:5,  paddingLeft:30}}>
<Text  style={{color:colors.white, fontFamily:'Alata-Regular', }} >Username</Text>
</View>

<TextInput  style={{margin:20, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', paddingLeft:10,}}  placeholder='fdhlan21' placeholderTextColor='gray'  />



<View style={{flexDirection:'row',  paddingLeft:30}}>
<Text  style={{color:colors.white, fontFamily:'Alata-Regular', }} >E-mail</Text>
</View>

<TextInput  style={{margin:20, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', paddingLeft:10,}}  placeholder='fadhlanhimawan12@gmail.com' placeholderTextColor='gray'  />




<View style={{flexDirection:'row',  paddingLeft:30}}>
<Text  style={{color:colors.white, fontFamily:'Alata-Regular', }} >Password</Text>
</View>

<TextInput  style={{margin:20, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', paddingLeft:10,}}  placeholder='****' placeholderTextColor='gray'   secureTextEntry={true} />




<View style={{flexDirection:'row', padding:10, paddingLeft:20}}>
    <TouchableOpacity style={{padding:10, backgroundColor:colors.header, paddingHorizontal:135, borderRadius:10, }}>
<Text   style={{color:colors.white, fontFamily:'Alata-Regular', }} >Simpan</Text>
    </TouchableOpacity>
</View>



<View  style={{flexDirection:'row', padding:10, marginTop:50}} >

<TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')} >
    <Image    style={{width:32, height:26, marginLeft:68}} source={require('../../assets/img/home.png')} />
</TouchableOpacity>

<TouchableOpacity>
    <Image  style={{width:26, height:26, marginLeft:144}}   source={require('../../assets/img/profile.png')} />
</TouchableOpacity>

</View>


    </View>
  );
}

export default HalamanAkun;