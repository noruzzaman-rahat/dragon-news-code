import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import CatagoryNews from "../pages/CatagoryNews";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayouts from "../Layouts/AuthLayouts";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter(

    [
        {
            path: '',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path:"/",
                    element: <Home></Home>
                },
                {
                    path: "/category/:id",
                    element: <CatagoryNews></CatagoryNews>,
                    loader: () => fetch("/news.json")
                }
            ]
        },
        {
            path: '/auth',
            element: <AuthLayouts></AuthLayouts>,
            children: [
              {
                path: '/auth/login',
                element:<Login></Login>
              },
              {
                path: '/auth/register',
                element:<Register></Register>
              }
            ]
        },
        {
            path: '/news-details/:id',
            element: <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>,
            loader: () => fetch("/news.json"),
        },
        {
            path: '/*',
            element: <h2>Error404</h2>
        }
    ]
);

export default router;