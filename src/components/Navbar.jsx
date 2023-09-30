import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import Rightbar from "./Rightbar";
import SearchBar from "./SearchBar";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      p={1}
      sx={{
        alignItem: "center",
        position: "sticky",
        background: "#fff",
        top: 0,
        justifyContent: "space-between",
        borderBottom:1,
        paddingBottom:3,
      }}
    >
        <Box display='flex' alignItems="center">
        <MenuIcon />

<Link to="/" style={{ display: "flex", alignItems: "center" }}>
  <img src={logo} alt="logo" title="Youtube Home" height={45} />
</Link>
        </Box>
    
      <SearchBar   />
        <Rightbar/>
    </Stack>
  );
};

export default Navbar;
