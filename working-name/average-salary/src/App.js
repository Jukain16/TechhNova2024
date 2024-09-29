import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
