import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Nosotros from './Pages/Nosotros';
import Contacto from './Pages/Contacto';
import "../src/index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Layout /></div>,
    children: [
      {
        index: true,
        element: <div><Home /></div>,
      },
      {
        path: "/nosotros",
        element: <div><Nosotros /></div>,
      },
      {
        path: "/contacto",
        element: <div><Contacto /></div>,
      }
    ]
  },
    

]

)
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
