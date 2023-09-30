import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import { fetchAPI } from "../utils/fetchAPI";
import {useParams} from 'react-router-dom'


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm}=useParams();

  useEffect(() => {

    fetchAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);
    
  return (
    <Box p={2} sx={{overflow:'auto',height:'90vh',flex:2}}>
    <Typography variant='h4' fontWeight='bold' mb={2}  >
      Search Result For: <span style={{color:'#F31503'}}>{searchTerm}</span>videos
    </Typography>
    <Box display='flex'>
<Box sx={{mr:{sm:'100px'}}}>
<Videos videos={videos}/>

</Box>
    </Box>
  </Box>
  );
};

export default SearchFeed;
