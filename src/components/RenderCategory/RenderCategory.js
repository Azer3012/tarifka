import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './Style';
import { useNavigation } from '@react-navigation/native';

const RenderCategory = ({category}) => {

  const navigation=useNavigation()

  const onSelect=(selectedCategory)=>{
    navigation.navigate('Category',{selectedCategory})
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>onSelect(category)} style={styles.category}>
        <Text style={styles.categoryText}>{category}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderCategory;
