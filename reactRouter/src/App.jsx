import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/home'
import AboutPage from './components/about'
import ContactPage from './components/contact'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>  
        <Link to="/about">About</Link>  
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}
