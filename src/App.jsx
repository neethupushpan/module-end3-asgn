import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import './App.css'

const Home = () => (
  
  <div className="home-container text-center p-10">
    <h1 className="home-title text-4xl font-bold">Welcome to Our Store</h1>
    <p className="home-description mt-4">Find the best products at unbeatable prices!</p>
    <Link to="/login" className="home-login-btn mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">Shop now</Link>
  </div>
  
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "test11@gmail.com" && password === "pass123") {
      navigate("/products");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container flex flex-col items-center p-10">
      <h2 className="login-title text-2xl font-bold">Login</h2>
      <input type="email" placeholder="Email" className="login-input border p-2 mt-4" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="login-input border p-2 mt-2" onChange={(e) => setPassword(e.target.value)} />
      <button className="login-btn bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={handleLogin}>Login</button>
    </div>
  );
};

const Products = () => {
 
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    
    <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
     
      {products.map((product) => (
       
        <div key={product.id} className="product-card border rounded-lg p-4 shadow hover:shadow-lg transition">
          <img src={product.image} alt={product.title} className="product-image w-full h-40 object-contain" />

          <h2 className="product-title ">{product.title}</h2>
          <p className="product-price text-gray-600">${product.price}</p>
          <button  className="btn-product ">Add to cart</button>
        </div>
      ))}
    </div>
  );
};

const Navbar = () => (
  <nav className="navbar bg-blue-500 p-4 text-white flex justify-between">
    <Link to="/" className="navbar-brand font-bold">TRENDZ</Link>
  
    <Link to="/login" className="navbar-link">Shop</Link>
    <Link to="/" className="navbar-link">About</Link>
    <Link to="/" className="navbar-link">Blogs</Link>
    <Link to="/" className="navbar-link">Contact</Link>
    
    <button className="login-btn bg-blue-500 text-white px-4 py-2 rounded mt-4" >Sign Up</button>
  </nav>
);

const Footer = () => (
  <footer className="footer ">
    &copy; 2025 Trendz. All Rights Reserved.
  </footer>
);

const App = () => (
  
 
  <Router>
    <Navbar />
    
    <div className="app-wrapper container mx-auto p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  
);

export default App;
