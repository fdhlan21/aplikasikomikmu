// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';


function HalamanPertanyaanEmpat({navigation}) {
  return (
    <View style={{ flex:1 , backgroundColor:colors.primary,  }}>






<View style={{flexDirection:'row', padding:10,paddingLeft:20,  marginTop:250}}>
<TouchableOpacity onPress={()=>navigation.navigate('HalamanPertanyaanLima')}     style={{padding:10, backgroundColor:colors.header, paddingHorizontal:120, paddingVertical:10, borderRadius:10,}}>
<Text style={{color:colors.white, fontSize:20, fontFamily:'Alata-Regular'}}>Colorfull</Text>
</TouchableOpacity>
</View>


<View style={{flexDirection:'row', padding:10,paddingLeft:20,  marginTop:0}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanPertanyaanLima')}  style={{padding:10, backgroundColor:colors.header, paddingHorizontal:135, paddingVertical:10, borderRadius:10,}}>
<Text style={{color:colors.white, fontSize:20, fontFamily:'Alata-Regular'}}>B&W</Text>
</TouchableOpacity>
</View>


<View style={{flexDirection:'row', padding:10,paddingLeft:20,  marginTop:250}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanPertanyaanLima')}   style={{padding:10, paddingHorizontal:130, paddingVertical:10, borderRadius:10,}}>
<Text style={{color:colors.white, fontSize:20, fontFamily:'Alata-Regular',}}>Lewati</Text>
</TouchableOpacity>
</View>


    </View>
  );
}

export default HalamanPertanyaanEmpat;