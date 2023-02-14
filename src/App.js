import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './components/Home';
import Application from './components/Application';


const App = () => {

  return(
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Application" element={<Application />} />
      </Routes>

    </div>
  )
}

export default App;
