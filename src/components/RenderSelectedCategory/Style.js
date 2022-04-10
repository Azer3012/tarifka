import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'



const deviceSize=Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        borderRadius:30,
        marginHorizontal:15,
        marginBottom:20,
        height: deviceSize.height/3,
        position: 'relative'
    },
    meal:{
        width: '100%',
        height: '100%'
        
        
    },
    textContainer:{
      
        position: 'absolute',
        bottom: 0,
        height: 30,
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0)'
    },
    text:{
        color: 'white'
    }
})
export default styles;