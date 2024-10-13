import {blue ,green, grey, deepPurple, pink, red } from "@mui/material/colors";

const palette ={
    light: {
        primary: blue[500],
        background:{
            default:grey[100],
            paper:"#fff"
        },
    },
    dark:{
        primary:deepPurple[400],
        background:{
            default:"#121212",
            paper:"#1e1e1e",
        },
    },
    green:{
        primary:green[500],
        background:{
            defualt:grey[100],
            paper:"#fff",
        },
    },
    error: red[500], 
    warning:pink[500],
};
export default palette;