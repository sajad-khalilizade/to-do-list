import { createContext,useState, useMemo,useContext, useEffect, ReactNode, FC} from "react";
import { ThemeProvider, createTheme,CssBaseline, Theme } from "@mui/material";
import { lightThemeOptions,darkThemeOptions,greenThemeOptins } from "../theme/themeOptions";

interface ThemeContextType {
    mode:"light"|"dark"|"green";
    toggleTheme:(theme:"light"|"dark"|"green")=>void;
}

interface ThemeContextProviderProps {
    children: ReactNode;
}
const ThemeContext = createContext<ThemeContextType|undefined>(undefined);

export const useThemeContext = ()=>{
    const context =useContext(ThemeContext);
    if(!context){
        throw new Error("use themeContext must be used within a themeContextProvider");
    }
    return context;
};

const themeMap={
    light:lightThemeOptions,
    dark:darkThemeOptions,
    green:greenThemeOptins
};

export const ThemeContextProvider:FC<ThemeContextProviderProps> =({children})=>{
   const storedTheme = (localStorage.getItem("app-theme")as "light"|"dark"|"green")||"light";

   const [mode,setMode] = useState<"light"|"dark"|"green">(storedTheme);

   const toggleTheme = (theme:"light"|"dark"|"green")=>{
    setMode(theme);
    localStorage.setItem("app-theme",theme);
   };

   useEffect(()=>{
    localStorage.setItem("app-theme",mode);
   },[mode]);

   const theme: Theme =useMemo(()=>createTheme(themeMap[mode]),[mode]);

   return(
    <ThemeContext.Provider value={{mode,toggleTheme}}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
        </ThemeProvider>
    </ThemeContext.Provider>
   )
}

export default ThemeContextProvider;