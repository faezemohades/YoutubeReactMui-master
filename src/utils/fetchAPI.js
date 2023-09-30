import axios from "axios";

  const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
   
  params: {
 
    maxResults: "50"
  },
  headers: {
    'X-RapidAPI-Key':"ef19323ea5msh147d0a6cdacb3bep1b2f95jsnb1798247c6de",

    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};


