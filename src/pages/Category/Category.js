import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import styles from './Style';
import {useRoute} from '@react-navigation/native';
import useFetch from '../../hooks/useFetch/useFetch';
import RenderSelectedCategory from '../../components/RenderSelectedCategory/RenderSelectedCategory';

const Category = () => {
  const route = useRoute();
  const {selectedCategory} = route.params;

  const {data, loading} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`,
  );

  console.log({selected: data.meals});

  const renderSelectedCategory=({item})=><RenderSelectedCategory item={item}/>

  return (
    <View>
      <FlatList
       data={data.meals} 
       keyExtractor={item=>item.idMeal}
       renderItem={renderSelectedCategory}
       
       />
    </View>
  );
};

export default Category;
