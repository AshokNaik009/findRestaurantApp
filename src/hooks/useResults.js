import { useEffect ,useState} from "react";
import yelp from "../api/yelp";

export default () =>{
    const [results, setResults] = useState([]);
  const [errorMessage, setError] = useState('');
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          count: 20,
          lat: 19.0176,
          lon: 72.8561,
          q:searchTerm,
          entity_type:'city',
          sort:'cost',
          order:'desc'
        },
      });
      console.log(response.data.restaurants);
      setResults(response.data.restaurants);
    } catch (error) {

      console.log("Something went wrong",error);
      setError("Something went wrong");
    }
  };

  // searchApi('pasta'); Bad Code

  useEffect(()=>{
    searchApi('Dosa');
  },[]);

  return [results,searchApi,errorMessage]

}