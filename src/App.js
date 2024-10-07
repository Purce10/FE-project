import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Counter from './pages/Counter/Counter';
import Nav from './components/NavBar/Nav';
import Upgrades from './components/Upgrades/Upgrades'

function App() {
  return (
    <>
    <Nav />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play-501' element={<Counter />} />
        <Route path='/upgrade' element={<Upgrades />} />
    </Routes>
    </>
    
  );
}

export default App;
