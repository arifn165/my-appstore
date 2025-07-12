import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import ExtraPage from "../Pages/ExtraPage/ExtraPage";
import Register from "../Pages/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            path:"/",
            Component: Home,
        },
        {
            path:"/Login",
            Component:Login,
        },
        {
            path:"/Register",
            Component:Register,
        },
        {
            path:"/Profile",
            Component:Profile,
        },
        {
            path:"/ExtraPage",
            Component:ExtraPage,
        },
    ]
  },
]);
export default router;