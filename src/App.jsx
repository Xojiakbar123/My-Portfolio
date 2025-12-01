import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Skills from "./pages/Skills"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Contacts from "./pages/Contacts"
import Header from "./components/Header/Header"
import Welcome from "./components/Welcome/Welcome"
import Footer from "./components/Footer/Footer"
import "./App.css"

export default function App() {
  return (
    <>
      <Welcome onlyFirstVisit={false} />
      <Router>
        <Header />
        <div className="container">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>


          
        </div>  
        <Footer/>
      </Router>
    </>  
  )
}
