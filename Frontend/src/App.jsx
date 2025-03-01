import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
import { useAuth } from './context/AuthContext';
import Footer from './components/Footer';

export default function App() {
  const { user } = useAuth();

  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={user ? <Home /> : <Navigate to="/login" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}
