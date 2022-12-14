// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HalamanSplash from './pages/HalamanSplash';
import HalamanLogin from './pages/HalamanLogin';
import HalamanRegister from './pages/HalamanRegister';
import HalamanPertanyaanSatu from './pages/HalamanPertanyaanSatu';
import HalamanPertanyaanDua from './pages/HalamanPertanyaanDua';
import HalamanPertanyaanTiga from './pages/HalamanPertanyaanTiga';
import HalamanPertanyaanEmpat from './pages/HalamanPertanyaanEmpat';
import HalamanPertanyaanLima from './pages/HalamanPertanyaanLima';
import HalamanHome from './pages/HalamanHome';
import HalamanRomance from './pages/HalamanRomance';
import HalamanDrama from './pages/HalamanDrama';
import HalamanKomedi from './pages/HalamanKomedi';
import HalamanSport from './pages/HalamanSport';
import HalamanSliceoflife from './pages/HalamanSliceoflife';
import HalamanAkun from './pages/HalamanAkun';
import HalamanTop from './pages/HalamanTop';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HalamanSplash'>
        <Stack.Screen name="HalamanSplash" component={HalamanSplash} options={{headerShown:false}} />
        <Stack.Screen name="HalamanLogin" component={HalamanLogin} options={{headerShown:false}} />
        <Stack.Screen name="HalamanRegister" component={HalamanRegister} options={{headerShown:false}} />
        <Stack.Screen name="HalamanPertanyaanSatu" component={HalamanPertanyaanSatu} options={{headerShown:false}} />
        <Stack.Screen name="HalamanPertanyaanDua" component={HalamanPertanyaanDua} options={{headerShown:false}} />
        <Stack.Screen name="HalamanPertanyaanTiga" component={HalamanPertanyaanTiga} options={{headerShown:false}} />
        <Stack.Screen name="HalamanPertanyaanEmpat" component={HalamanPertanyaanEmpat} options={{headerShown:false}} />
        <Stack.Screen name="HalamanHome" component={HalamanHome} options={{headerShown:false}} />
        <Stack.Screen name="HalamanPertanyaanLima" component={HalamanPertanyaanLima} options={{headerShown:false}} />
        <Stack.Screen name="HalamanRomance" component={HalamanRomance} options={{headerShown:false}} />
        <Stack.Screen name="HalamanDrama" component={HalamanDrama} options={{headerShown:false}} />
        <Stack.Screen name="HalamanKomedi" component={HalamanKomedi} options={{headerShown:false}} />
        <Stack.Screen name="HalamanSport" component={HalamanSport} options={{headerShown:false}} />
        <Stack.Screen name="HalamanSliceoflife" component={HalamanSliceoflife} options={{headerShown:false}} />
        <Stack.Screen name="HalamanAkun" component={HalamanAkun} options={{headerShown:false}} />
        <Stack.Screen name="HalamanTop" component={HalamanTop} options={{headerShown:false}} />





      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;