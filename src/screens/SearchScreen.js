import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, searchApi, errorMessage] = useResults();

  const filterResultsByprice = (price) => {
    return results.filter((result) => {
      return result.restaurant.price_range === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onChangeTerm={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text> {errorMessage} </Text> : null}
      <ScrollView>
        <ResultsList
          result={filterResultsByprice(2)}
          title="Cost Effective"
          
        />
        <ResultsList result={filterResultsByprice(3)} title="Bit Pricer"   />
        <ResultsList result={filterResultsByprice(4)} title="Big Spender"   />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
