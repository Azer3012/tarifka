import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';

const RenderSelectedCategory = ({item}) => {
  console.log({item});
  const navigation=useNavigation()

  const goDetail=(id)=>{
    navigation.navigate('Detail',{id})
  }
  return (
    <TouchableOpacity onPress={()=>goDetail(item.idMeal)} style={styles.container}>
      <Image style={styles.meal} source={{uri: item.strMealThumb}} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderSelectedCategory;
