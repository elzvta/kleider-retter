import {Outlet} from 'react-router-dom';
import {Box, CssBaseline, ThemeProvider} from '@mui/material';
import theme from '../../theme';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            {/* TODO vh- headerHeight - footerHeight*/}
            <Box sx={{minHeight: '100vh'}} component="main">
                <Outlet/>
            </Box>
            <Footer/>
        </ThemeProvider>
    );
}
