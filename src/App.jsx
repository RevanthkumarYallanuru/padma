import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Seva from './pages/Seva'
import Gallary from './pages/Gallary'
import Trust from './pages/Trust'
import Maps from './components/Maps'
const App = () => {
  
  return (
    <>
   <Navbar  />
   <Home/>
   <About />
   <Seva />
   <Gallary/>
   <Trust/>
   <Maps/>
    </>
  )
}

export default App
