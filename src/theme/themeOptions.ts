import { ThemeOptions } from "@mui/material";
import palette from "./palette";

export const lightThemeOptions: ThemeOptions = {
    palette:{
        mode: "light",
        primary:{
            main: palette.light.primary
        },
        background:{
            default: palette.light.background.default,
            paper:palette.light.background.paper,
        },
    },
    typography:{
        fontFamily:"Roboto, sans-serif",
    },
};

export const darkThemeOptions: ThemeOptions ={
    palette:{
        mode:"dark",
        primary:{
            main:palette.dark.primary,
        },
        background:{
            default:palette.dark.background.default,
            paper:palette.dark.background.paper,
        },
    },
    typography:{
        fontFamily:"Roboto, sans-serif",
    },
};

export const greenThemeOptins: ThemeOptions ={
    palette:{
        mode:"light",
        primary:{
            main:palette.green.primary,
        },
        background:{
            default:palette.green.background.defualt,
            paper:palette.green.background.paper,
        },
    },
    typography:{
        fontFamily:"Roboto, sans-serif",
    },
};