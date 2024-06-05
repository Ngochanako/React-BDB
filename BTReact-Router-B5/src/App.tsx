
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import TeaShop from './pages/TeaShop'
import Price from './pages/Price'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}>
            <Route index element={<Home/>}/>
            <Route path='about' index element={<About/>}/>
            <Route path='contact' index element={<Contact/>}/>
            <Route path='teaShop' index element={<TeaShop/>}/>
            <Route path='price' index element={<Price/>}/>

        </Route>
      </Routes>
      
    </div>
  )
}
