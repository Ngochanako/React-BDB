
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import HomePage from './pages/HomePage'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Price from './pages/Price'
import Testimonial from './pages/Testimonial'
import Team from './pages/Team'
import Open from './pages/Open'
import Error404 from './pages/Error404'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
            <Route index element={<HomePage/>}/>
            <Route path='about'element={<About/>}/>
            <Route path='service' element={<Services/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='price' element={<Price/>}/>
            <Route path='testimonial' element={<Testimonial/>}/>
            <Route path='team' element={<Team/>}/>
            <Route path='open' element={<Open/>}/>
            <Route path='404' element={<Error404/>}/>

        </Route>
      </Routes>
    </div>
  )
}
