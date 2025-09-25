import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Countries from './pages/Countries'
import CountryDetail from './pages/CountryDetail'
import './index.css' // Import index.css instead of App.css

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/country/:code" element={<CountryDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App