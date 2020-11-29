import React from "react";
import { Text, StyleSheet, View, FlatList ,TouchableOpacity } from "react-native";
import {withNavigation} from "react-navigation";
import   ResultDetail from "./ResultDetail";

const ResultsList = ({ title, result ,navigation }) => {
 
  if(!result.length) {
    return null;
  }
  return (
    <View style={styles.container} >
      <Text style={styles.title}> {title} </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        data={result}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>{navigation.navigate('Result',{id:item.restaurant.id})}}>
              <ResultDetail result={item} /> 
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginBottom:5
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft:15
  },
});

export default withNavigation(ResultsList);
