import { Box, Button, FormControl, OutlinedInput } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Box
      component="form"
      sx={{
        display: {
          sm: "flex",
          xs: "none",
        },
        width: {
          xs:"none",
          sm: "50%",
          md: "90%",
        },
      }}
      onSubmit={handleSubmit}
    >
      <FormControl sx={{ width: "50%",ml:"20px" }}>
        <OutlinedInput
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FormHelperText />
      </FormControl>

      <Button
        variant="outlined"
        type="submit"
        sx={{ color: "gray", borderColor: "gray", borderRadius: 1 ,height:"95%"}}
        
      >
        <SearchOutlinedIcon />
      </Button>
    </Box>
  );
}

export default SearchBar;
