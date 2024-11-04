import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../Home'
import Register from '../Register'
import Login from '../Login'


export default function Rutas() {
    return (
      <>
          <BrowserRouter> 
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/registrar' element={<Register />} />
              </Routes>
          </BrowserRouter>
      </>
    )
  }