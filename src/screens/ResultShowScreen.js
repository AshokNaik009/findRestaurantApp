import React , { useState ,useEffect} from "react";
import {Text,StyleSheet,View ,FlatList,Image} from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({navigation}) => {
    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');
    const getResults = async (id) => {
        const response = await yelp.get(`restaurant?res_id=${id}`)
        setResult(response.data);
    };
 
     useEffect(()=>{
        getResults(id);
     },[]);

     if(!result) {
         return null;
     }

    return (<View>
            <Image style={styles.image} source={{uri:result.thumb}}/>
            <Text> {result.name} </Text>
            <Text> Address: {result.location.address} </Text>
            <Text> Cuisines: {result.cuisines}  </Text>
            <Text> Contact: {result.phone_numbers}  </Text>
    </View>);
};

const styles = StyleSheet.create({
    image:{
        height:200,
        width:200
    }
})

export default ResultShowScreen;
