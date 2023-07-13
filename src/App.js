import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Courses from './components/Courses';
import Auth from './components/Auth';
import Page404 from './components/Page404';
import Cart from './components/Cart';
import FED_Course from './components/FED_Course';
import BED_Course from './components/BED_Course';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* Ek sath Multiple Components Render Krra skte h  */}
          {/* <Route path='/products' element={<> <Products /> <About /> <Auth /> </>} />   */}
          <Route path='/products' element={<Products />} />  
          <Route path='/courses' element={<Courses />} >
            <Route path='fed' element={<FED_Course />} />
            <Route path='bed' element={<BED_Course />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App