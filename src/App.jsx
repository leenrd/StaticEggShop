import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Homepage from './pages/homepage'
import About from './pages/about'
import Contact from './pages/contact'





function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contacts' element={<Contact />}></Route>
      </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
