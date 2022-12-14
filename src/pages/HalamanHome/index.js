// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';

  

function HalamanHome({navigation}) {
  return (
    <View style={{ flex:1 , backgroundColor:colors.primary,  }}>


<ScrollView>
<View style={{padding:10, backgroundColor:colors.header, paddingVertical:30, borderBottomLeftRadius:30, borderBottomRightRadius:30, }}>


<View style={{flexDirection:'row', padding:10,  paddingLeft:300,}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanLogin')}   style={{}}>
<Image style={{width:23,height:23}} source={require('../../assets/img/exit.png')}/>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row',marginTop:0, paddingLeft:20}}  > 
<Text style={{color:colors.white, fontSize:20, fontFamily:'Alata-Regular', }}  >Hi, Fadhlan!</Text>
</View>

<View style={{flexDirection:'row', padding:10,marginTop:10, paddingLeft:20,}}>
<Image  style={{width:168, height:28,}} source={require('../../assets/img/KOMIKMU2.png')} />
</View>

</View>


<View style={{flexDirection:'row', padding:10,  paddingLeft:13,  bottom:25  }}>
    <Image  style={{width:334, height:187,    }}   source={require('../../assets/img/gambarheader.png')} />
</View>




<View style={{flexDirection:'row', padding:10,}}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanTop')}    >
<Text  style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:20,}} >TOP 10</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:0, marginTop:20}}>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/potosatu.png')}/>
</TouchableOpacity>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/potodua.png')}/>
</TouchableOpacity>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/pototiga.png')}/>
</TouchableOpacity>

</View>





<View style={{flexDirection:'row', padding:10, marginTop:20}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanRomance')}   >
<Text  style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:20,}} >ROMANCE</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:0, marginTop:20}}>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/potosatu.png')}/>
</TouchableOpacity>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/potodua.png')}/>
</TouchableOpacity>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/pototiga.png')}/>
</TouchableOpacity>

</View>





<View style={{flexDirection:'row', padding:10, marginTop:20,}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanDrama')}  >
<Text  style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:20,}} >DRAMA</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:0, marginTop:20}}>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/potosatu.png')}/>
</TouchableOpacity>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/potodua.png')}/>
</TouchableOpacity>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/pototiga.png')}/>
</TouchableOpacity>

</View>




<View style={{flexDirection:'row', padding:10,marginTop:20,}}>
<TouchableOpacity onPress={()=>navigation.navigate('HalamanSport')}  >
<Text  style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:20,}} >SPORT</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:0,marginTop:20}}>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/potosatu.png')}/>
</TouchableOpacity>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/potodua.png')}/>
</TouchableOpacity>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/pototiga.png')}/>
</TouchableOpacity>

</View>





<View style={{flexDirection:'row', padding:10,marginTop:20,}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanKomedi')}   >
<Text  style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:20,}} >COMEDY</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:0, marginTop:20}}>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/potosatu.png')}/>
</TouchableOpacity>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/potodua.png')}/>
</TouchableOpacity>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/pototiga.png')}/>
</TouchableOpacity>

</View>




<View style={{flexDirection:'row', padding:10, marginTop:20,}}>
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanSliceoflife')} >
<Text  style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:20,}} >SLICE OF LIFE </Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'row', padding:0,  marginTop:20}}>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/potosatu.png')}/>
</TouchableOpacity>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/potodua.png')}/>
</TouchableOpacity>

<TouchableOpacity>
    <Image  style={{width:120   , height:150,}}  source={require('../../assets/img/pototiga.png')}/>
</TouchableOpacity>

</View>

 

<View  style={{flexDirection:'row', padding:10}} >  

</View>


</ScrollView>



<View  style={{flexDirection:'row', padding:10, marginTop:0}} >

<TouchableOpacity>
    <Image    style={{width:32, height:26, marginLeft:68}} source={require('../../assets/img/home.png')} />
</TouchableOpacity>

<TouchableOpacity   onPress={()=>navigation.navigate('HalamanAkun')}   >
    <Image  style={{width:26, height:26, marginLeft:144}}   source={require('../../assets/img/profile.png')} />
</TouchableOpacity>

</View>

    </View>
  );
}

export default HalamanHome;