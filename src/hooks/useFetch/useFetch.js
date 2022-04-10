import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'

const useFetch =  (url) => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const fetchData=async ()=>{
        try {
            const response =await axios.get(url)
            setLoading(false)
            setData(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
 
  return {data,loading}
}

export default useFetch;

