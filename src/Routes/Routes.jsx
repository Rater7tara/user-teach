import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../Layout/ErrorPage";
import AddUser from "../Pages/AddUser/AddUser";
import Home from "../Pages/Home/Home/Home";
import SingleCard from "../Pages/UserCards/SingleCard/SingleCard";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/singleUser/:id',
                element: <SingleCard></SingleCard>,
                loader: () => fetch(''),

            }
        ]
    },
]);