// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <main className="container mx-auto p-6">
        <section className="text-center py-16 bg-gray-100">
          <h2 className="text-5xl font-bold">Discover Fashion That Defines You</h2>
          <p className="mt-4 text-gray-600">Step into a world of sophistication and trend-setting styles.</p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">Shop Now</button>
        </section>
        
        <section className="py-12">
          <h3 className="text-3xl font-semibold text-center">Browse Our Selections</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="p-4 bg-gray-200 text-center rounded">Men</div>
            <div className="p-4 bg-gray-200 text-center rounded">Women</div>
            <div className="p-4 bg-gray-200 text-center rounded">Accessories</div>
            <div className="p-4 bg-gray-200 text-center rounded">Outerwear</div>
            <div className="p-4 bg-gray-200 text-center rounded">Shoes</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;