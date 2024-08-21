import { createTheme } from '@mui/material/styles';

// Create a theme instance
const theme = createTheme({
    palette: {
        primary: {
            main: '#2980B9',
        },
        secondary: {
            main: '#333333',
        },
        text: {
            primary: '#333333'
        },
    }
});

export default theme;
