import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Seva from './pages/Seva'
import Gallary from './pages/Gallary'
const App = () => {
  
  return (
    <>
   <Navbar  />
   <Home/>
   <About />
   <Seva />
   <Gallary/>
    </>
  )
}

export default App
