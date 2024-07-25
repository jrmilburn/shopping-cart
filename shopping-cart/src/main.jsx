import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './index.css'
import Root from './pages/root'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'
import ErrorPage from './error-page'

function App() {


  const [cartItems, setCartItems] = useState([]);
  const [shopItems, setShopItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(json => {
              console.log(json);
              json.forEach(item => {
                  const tmp = {
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      img: item.image,
                      description: item.description
                  }
                  setShopItems(prevItems => [...prevItems, tmp]);
                  setIsLoading(false);
              })
          });
  }, []);

  function handleClick(newItem) {
    setCartItems(prevItems => [...prevItems, newItem]);
}

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root cartitems={cartItems}/>}>
        <Route index element={<HomePage />}/>
        <Route path='shop' element={<Shop clickFunction={handleClick} items={shopItems} isLoading={isLoading}/>}/>
        <Route path='checkout' element={<Checkout items={cartItems}/>} />
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
