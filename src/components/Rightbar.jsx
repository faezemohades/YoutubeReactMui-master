import { Avatar, Badge, Box } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";

import  {IoIosNotificationsOutline}  from "react-icons/io";

function Rightbar() {
  return (
    <Box sx={{ display: "flex", gap: 2 ,alignItems:'center' ,margin:"10px"}}>
      <Badge badgeContent={4} color="error">
        <IoIosNotificationsOutline  size="40" />
      </Badge>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>F</Avatar>
    </Box>
  );
}

export default Rightbar;
