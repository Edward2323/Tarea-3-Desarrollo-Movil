import { useState } from 'react'
import TraductorNumeros from './Components/TraductorNumeros'
import Presentacion from './Components/Presentacion'
import Navbar from './Components/Navbar'
import Tabla from './Components/Tabla'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sumadora from './Components/Sumadora'




export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/Sumadora" element={<Sumadora />} />
        <Route path="/" element={<Presentacion />} />
        <Route path="/Traductor" element={<TraductorNumeros />} />
        <Route path="/Tabla" element={<Tabla />} />
      </Routes>
    </Router>
  )
}


