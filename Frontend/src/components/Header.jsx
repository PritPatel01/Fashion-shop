// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {
  const { user, logout } = useAuth();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50 border-b border-gray-200 w-full">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-3xl font-extrabold text-gray-900">Fashion Store</Link>
        
        <nav className="flex space-x-8 text-lg font-medium">
          <Link to="/Home" className="hover:text-gray-600 transition">Home</Link>
          <Link to="/shop" className="hover:text-gray-600 transition">Shop</Link>
          <Link to="/about" className="hover:text-gray-600 transition">About</Link>
          <Link to="/contact" className="hover:text-gray-600 transition">Contact</Link>
        </nav>
        
        <div className="flex space-x-4 items-center">
          <Link to="/cart" className="text-xl hover:text-gray-600 transition">
            <FiShoppingCart />
          </Link>
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="hover:text-gray-600 transition">Dashboard</Link>
              <Link to="/profile" className="hover:text-gray-600 transition">
                <FiUser />
              </Link>
              <button onClick={logout} className="px-5 py-2 text-red-600 hover:text-gray-200 transition">Logout</button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <button onClick={handleLoginClick} className="bg-blue-500 text-white px-5 py-2 rounded-lg  transition">Login</button>
              <button onClick={handleRegisterClick} className="bg-black text-white px-5 py-2 rounded-lg  transition"> Register </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;