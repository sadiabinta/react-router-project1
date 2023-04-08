import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root, {loader as rootLoader, action as rootAction} from './routes/root'
import ErrorPage from './ErrorPage'
import Contacts from './routes/Contacts'
import { loader } from './routes/root'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    loader: rootLoader,
    action: rootAction,
    children:[
      {
        path:'/contacts/:contactId',
        element:<Contacts></Contacts>
      }
    ]
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
