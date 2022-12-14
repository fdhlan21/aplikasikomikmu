// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';


function HalamanSliceoflife({navigation}) {
  return (
    <View style={{ flex:1 , backgroundColor:colors.primary,  }}>


<View  style={{flexDirection:'row', padding:10, backgroundColor:colors.header, paddingHorizontal:0, paddingVertical:10, borderBottomRightRadius:10, borderBottomLeftRadius:10}} >


<View style={{flexDirection:'row', padding:10,  marginTop:18}}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')}      style={{marginLeft:10,}}>
    <Image   style={{width:10, height:18}}  source={require('../../assets/img/back.png')} />
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:10,  paddingLeft:68,}}>
<Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:30,}}>Slice of life</Text>
</View>


</View>

<ScrollView>

<View style={{flexDirection:'row', padding:25, }}>

<TouchableOpacity style={{marginRight:30,}}>
    <Image   style={{width:141, height:191, }}  source={require('../../assets/img/potosatu.png')} />
</TouchableOpacity>

<TouchableOpacity>
    <Image   style={{width:141, height:191, }}  source={require('../../assets/img/potodua.png')} />
</TouchableOpacity>

</View>
</ScrollView>




<View  style={{flexDirection:'row', padding:10, marginTop:0}} >

<TouchableOpacity    onPress={()=>navigation.navigate('HalamanHome')}  >
    <Image    style={{width:32, height:26, marginLeft:68}} source={require('../../assets/img/home.png')} />
</TouchableOpacity>

<TouchableOpacity    onPress={()=>navigation.navigate('HalamanAkun')}  >
    <Image  style={{width:26, height:26, marginLeft:144}}   source={require('../../assets/img/profile.png')} />
</TouchableOpacity>

</View>


    </View>
  );
}

export default HalamanSliceoflife;