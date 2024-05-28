import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnaSayfa from './pages/ana-sayfa/AnaSayfa';
import YardimPage from './pages/Yardim/YardimPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AnaSayfa />} />
        <Route exact path="/yardim" element={<YardimPage />} />
      </Routes>
    </Router>
  );
}

export default App;
