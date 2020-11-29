import axois from "axios";

export default axois.create({
    baseURL:'https://developers.zomato.com/api/v2.1',
    headers:{
        "user-key": "***************************",
        "content-type": "application/json"
    }
})