import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductList from './components/Products/ProductList';
import LowStockAlerts from './components/Notifications/LowStockAlerts';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/products">Product List</Link></li>
          <li><Link to="/low-stock-alerts">Low Stock Alerts</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/low-stock-alerts" element={<LowStockAlerts />} />
      </Routes>
    </Router>
  );
}

export default App;

<li><Link to="/admin/add-product">Add Product</Link></li>

