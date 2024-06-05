
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Repair from './pages/Repair'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Homepage/>}>
               <Route index element={<Home/>}/>
               <Route path='about' element={<About/>}/>
               <Route path='blog' element={<Blog/>}/>
               <Route path='repair' element={<Repair/>}/>
               <Route path='contact' element={<Contact/>}/>
          </Route>
      </Routes>
    </div>
  )
}
