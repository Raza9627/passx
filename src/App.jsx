import React from 'react'
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Feedback from "./Feedback";

const App = () => {
  return (
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/feedback' element={<Feedback/>}/>
 </Routes>
  )
}

export default App