import React from "react";
import { Text , View , Image, StyleSheet } from "react-native";

const ResultDetails = ({result}) =>{

   

    return(<View style={styles.container}>
        <Image  style={styles.imageStyle}  source={{uri:result.restaurant.thumb ? result.restaurant.thumb  : 'data:image/png;base64,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'  }} /> 
        <Text style={styles.name}  > {result.restaurant.name} </Text>
        <Text> {result.restaurant.user_rating.aggregate_rating} Ratings , {result.restaurant.all_reviews_count} Reviews</Text>

    </View>);
};

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },

    imageStyle:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5
    },
    name:{
        fontWeight:"bold"
    }
    
});

export default ResultDetails;


