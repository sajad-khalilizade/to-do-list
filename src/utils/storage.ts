export const getStoredTheme = (): "light"|"dark"|"green" =>{
    return (localStorage.getItem("app-theme") as "light"|"dark"|"green")||"light";
};

export const saveTheme = (theme:"light"|"dark"|"green"):void =>{
    localStorage.setItem("app-theme",theme);
};