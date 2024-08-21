import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Donation from './pages/Donation/Donation';

const getPath = (path: string) => `${import.meta.env.VITE_BASE_URL}${path}`;
console.log(11111, getPath('about'))
console.log(11111, getPath(''))
console.log(11111, getPath('donate'))
console.log(11111, getPath('contact'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: getPath(''),
                element: <Home/>,
            },
            {
                path: getPath('about'),
                element: <About/>,
            },
            {
                path: getPath('donate'),
                element: <Donation/>,
            },
            {
                path: getPath('contact'),
                element: <Contact/>,
            },
        ],
    },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
} else {
    console.error("Root element not found");
}
