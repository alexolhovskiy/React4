
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/home'
import { Details } from './Components/Details/details';
import { About } from './Components/About/about';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/item" element={<Details />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
