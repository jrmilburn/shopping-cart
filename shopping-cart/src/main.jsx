import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { useState } from 'react'

import './index.css'
import Root from './pages/root'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import ErrorPage from './error-page'

function App() {

  const [shoppingItems, setShoppingItems] = useState(0);

  const handleClick = () => {

    setShoppingItems(shoppingItems + 1);

  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root shoppingitems={shoppingItems}/>}>
        <Route index element={<HomePage />}/>
        <Route path='shop' element={<Shop clickFunction={handleClick}/>}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )

}



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>

)
