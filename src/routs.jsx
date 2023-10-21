import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Cart from './Components/Cart';




export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            }
        ]
    }
])