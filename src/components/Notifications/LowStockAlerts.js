import React, { useState, useEffect } from 'react';
import { getLowStockProducts } from '../../services/api';

const LowStockAlerts = () => {
  const [lowStockProducts, setLowStockProducts] = useState([]);

  useEffect(() => {
    const fetchLowStockProducts = async () => {
      try {
        const response = await getLowStockProducts();
        setLowStockProducts(response.data);
      } catch (error) {
        console.error('Error fetching low-stock products:', error);
      }
    };

    fetchLowStockProducts();
  }, []);

  return (
    <div className="container">
      <h2>Low Stock Alerts</h2>
      {lowStockProducts.length > 0 ? (
        <ul>
          {lowStockProducts.map((product) => (
            <li key={product._id}>
              <strong>{product.name}</strong> has only {product.stock} left in stock!
            </li>
          ))}
        </ul>
      ) : (
        <p>All products are sufficiently stocked.</p>
      )}
    </div>
  );
};

export default LowStockAlerts;
