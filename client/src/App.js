
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/API/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
