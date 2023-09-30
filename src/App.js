import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
 <BrowserRouter>
 <Box>
  <Navbar/>
  <Routes>
    <Route exact  path="/" element={<Feed/>}/>
    <Route path="/video/:id" element={<VideoDetail/>}/>
     <Route path="/search/:searchTerm" element={<SearchFeed/>}/>

  </Routes>
 </Box>
 </BrowserRouter>
  );
}

export default App;
