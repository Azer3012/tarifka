import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categories from './pages/Categories/Categories';
import Category from './pages/Category/Category';
import Detail from './pages/Detail/Detail';

const Stack=createNativeStackNavigator();


const options={
  headerTitleStyle:{color:'#FFA500'},
  headerTintColor:'#FFA500'
  
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Categories" component={Categories} 
        options={options}
        
        />
        <Stack.Screen name="Category" component={Category}  options={options} />
        <Stack.Screen name="Detail" component={Detail}  options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})