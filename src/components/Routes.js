import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../LayoutMain";
import About from "./About";
import BookDetails from "./BookDetails";
import Books from "./Books";
import Home from "./Home";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<LayoutMain></LayoutMain>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/books',
          element:<Books></Books>,
          loader:()=> fetch('https://api.itbook.store/1.0/new')
        },
        {
          path:'/book/:id',
          element:<BookDetails></BookDetails>,
          loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
        }
      ]
    }
  ])