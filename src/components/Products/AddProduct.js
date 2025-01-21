import React, { useState } from 'react';
import { addProduct } from '../../services/api';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: 0,
    stock: 0,
    lowStockThreshold: 10,
  });

  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await addProduct(formData, token);
      alert('Product added successfully!');
      setFormData({
        name: '',
        category: '',
        description: '',
        price: 0,
        stock: 0,
        lowStockThreshold: 10,
      });
    } catch (error) {
      alert('Error adding product: ' + error.response.data.error);
    }
  };

  return (
    <div className="container">
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          value={formData.stock}
          onChange={handleChange}
        />
        <input
          type="number"
          name="lowStockThreshold"
          placeholder="Low Stock Threshold"
          value={formData.lowStockThreshold}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
