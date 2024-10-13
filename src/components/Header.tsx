import React from "react";
import { AppBar,Toolbar,Typography,Button } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";

const Header: React.FC= ()=>{
const { toggleTheme}=useThemeContext();

return(
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" sx={{flexGrow:1}}>
            MUI Multi-Theme App (TypeScript)
            </Typography>

            <Button color="inherit" onClick={()=>toggleTheme("light")} sx={{mr:2}}>
                Light</Button>
            <Button color="inherit" onClick={()=>toggleTheme("dark")} sx={{mr:2}}>
                dark</Button>
            <Button color="inherit" onClick={()=>toggleTheme("green")} >
                green</Button>
        </Toolbar>
    </AppBar>
);
};
export default Header;