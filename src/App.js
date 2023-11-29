
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Movies from './components/Movies';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/movies" element={<Movies/>} />
      </Routes>
    </div>
  );
}

export default App;
