import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Linking
} from 'react-native';
import React from 'react';
import styles from './Style';
import {useRoute} from '@react-navigation/native';
import useFetch from '../../hooks/useFetch/useFetch';
const Detail = () => {
  const route = useRoute();
  const {id} = route.params;
  console.log(id);

  const {data, loading} = useFetch(
    `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
 
  const openYoutube=(url)=>{
      Linking.openURL(url)
  }

 


  const renderItem=({item})=>{
      return(
        <View style={styles.container} >
        <Image style={styles.image}
         source={{uri: item.strMealThumb}} />
        <Text style={styles.title}>{item.strMeal}</Text>
        <Text style={styles.category}>{item.strArea}</Text>
        <Text style={styles.desc}>{item.strInstructions}</Text>
        <TouchableOpacity onPress={()=>openYoutube(item.strYoutube)} style={styles.btn} >
          <Text style={styles.btnText}>Wathc on Youtube</Text>
        </TouchableOpacity>
      </View>
      )
  }

  if(loading){
      return <ActivityIndicator size='large'/>
  }

 
  return (
    <FlatList
    data={data.meals}
    keyExtractor={item=>item.idMeal}
    renderItem={renderItem}
    
    />
  );
};

export default Detail;
