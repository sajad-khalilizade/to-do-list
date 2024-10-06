import {useState} from "react";
import { ThemeProvider,createTheme,Card, CardContent, CardMedia, Switch, Typography, CssBaseline } from "@mui/material";

export default function ThemeToggle(){

const [darkMode,setDarkMode]=useState<boolean>(true);

const toggleDarkTheme = ()=>{
  setDarkMode(!darkMode);
};

const darkTheme = createTheme({
  palette:{
    mode:darkMode?"dark":"light",
    primary:{main:"#90caf9"},
    secondary:{main:"#131052"}
  }
},)

return(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
  <h2>Dark Mode</h2>
  <Switch checked={darkMode} onChange={toggleDarkTheme} />
  <Card sx={{width:"30%",borderRadius:3, padding:1}}>
    <CardContent>
      <CardMedia sx={{height: 180,borderRadius:3}} 
      title="ToDoLisT" />
      <Typography variant="h4" component="div" sx={{marginTop:3}} >ToDoLisT</Typography>
      <Typography sx={{mb:1.5}} color="text.secondary">By SaJaD</Typography>
    </CardContent>
  </Card>
</div>
  </ThemeProvider>
)
}