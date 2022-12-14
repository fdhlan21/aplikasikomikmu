// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';


function HalamanPertanyaanLima({navigation}) {
  return (
    <View style={{ flex:1 , backgroundColor:colors.primary,  }}>






<View style={{flexDirection:'row', padding:10,paddingLeft:20,  marginTop:250}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanHome')}  style={{padding:10, backgroundColor:colors.header, paddingHorizontal:108, paddingVertical:10, borderRadius:10,}}>
<Text style={{color:colors.white, fontSize:20, fontFamily:'Alata-Regular'}}>Anak-anak</Text>
</TouchableOpacity>
</View>


<View style={{flexDirection:'row', padding:10,paddingLeft:20,  marginTop:0}}>
<TouchableOpacity onPress={()=>navigation.navigate('HalamanHome')}     style={{padding:10, backgroundColor:colors.header, paddingHorizontal:124, paddingVertical:10, borderRadius:10,}}>
<Text style={{color:colors.white, fontSize:20, fontFamily:'Alata-Regular'}}>Remaja</Text>
</TouchableOpacity>
</View>


<View style={{flexDirection:'row', padding:10,paddingLeft:20,  marginTop:0}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanHome')}    style={{padding:10, backgroundColor:colors.header, paddingHorizontal:124, paddingVertical:10, borderRadius:10,}}>
<Text style={{color:colors.white, fontSize:20, fontFamily:'Alata-Regular'}}>Dewasa</Text>
</TouchableOpacity>
</View>


<View style={{flexDirection:'row', padding:10,paddingLeft:20,  marginTop:190}}>
<TouchableOpacity      onPress={()=>navigation.navigate('HalamanHome')}    style={{padding:10, paddingHorizontal:130, paddingVertical:10, borderRadius:10,}}>
<Text style={{color:colors.white, fontSize:20, fontFamily:'Alata-Regular',}}>Selesai</Text>
</TouchableOpacity>
</View>


    </View>
  );
}

export default HalamanPertanyaanLima;