import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Pages/Home.jsx';
import {Navbar} from './Components/Navbar.jsx';


import AboutUs from './Pages/AboutUs.jsx'
import Contact from './Pages/ContactUs.jsx';

import {Footer} from './Components/Footer.jsx';



const Layout = ()=>{

  return(
    <div>
       <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
   
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
   
      {
        path: "about",
        element:<AboutUs/>,
      },
     
     
      {
        path: "contactus",
        element:<Contact/>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);