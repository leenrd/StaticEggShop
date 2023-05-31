import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Homepage from './pages/homepage'











function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        {/* <Route path='/about' element={<About />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route> */}
      </Routes>
      </Router>
    </>
  )
}

export default App
