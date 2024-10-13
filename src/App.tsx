import React from "react";
import { Box,Typography,Container } from "@mui/material";
import Header from "./components/Header";

const App:React.FC=()=>{
  return(
    <Container>
      <Header />
      <Box sx={{padding:3}}>
        <Typography variant="h4" gutterBottom>
        Welcome to MUI Multi-Theme App
        </Typography>
      </Box>
    </Container>
  );
};

export default App;