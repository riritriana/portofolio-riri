import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Sertificate from './pages/Sertificate.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import Tech from './pages/Tech.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element :<App/>,
    children:[
      {
          path:'/',
        element :<Home/>,
      },
      {
          path:'/sertificate',
        element :<Sertificate/>,
      },
      {
          path:'/project',
        element :<Project/>,
      },
      {
          path:'/contact',
        element :<Contact/>,
      },
      {
          path:'/tech',
        element :<Tech/>,
      },
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router} />
  </StrictMode>
)
