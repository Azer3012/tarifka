import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import styles from './Style'
import useFetch from '../../hooks/useFetch/useFetch'
import RenderCategory from '../../components/RenderCategory/RenderCategory'
const Categories = () => {
    const {data,loading}=useFetch('http://www.themealdb.com/api/json/v1/1/list.php?c=list')
    
    const renderCategory=({item})=><RenderCategory category={item.strCategory} />
    ;
  return (
    <View style={styles.container}>
      <FlatList
      data={data.meals}
      keyExtractor={item=>item.strCategory}
      renderItem={renderCategory}
      
      
      
      />
    </View>
  )
}

export default Categories

