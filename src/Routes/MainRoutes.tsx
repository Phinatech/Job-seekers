import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Components/Layout/HomeLayout";
import HomeScreen from "../Pages/HomeScreen/HomeScreen";
import SignUpLayout from "../Components/Layout/SignUpLayout";
import SignUp from "../Pages/SignUp/SignUp";
import LoginLayout from "../Components/Layout/LoginLayout";
import Login from "../Pages/Login/Login";

export const DesktopRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },

  //Sign Up
  {
    path: "/signup",
    element: <SignUpLayout />,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
    ],
  },

  //Login
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
]);
