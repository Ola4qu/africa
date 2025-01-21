import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Backend URL

const api = axios.create({
  baseURL: API_URL,
});

export const login = (email, password) => api.post('/auth/login', { email, password });
export const register = (username, email, password, role) =>
  api.post('/auth/register', { username, email, password, role });

export const getProducts = () => api.get('/products/');
export const addProduct = (product, token) =>
  api.post('/products/', product, { headers: { Authorization: `Bearer ${token}` } });
export const updateProduct = (id, product, token) =>
  api.put(`/products/${id}`, product, { headers: { Authorization: `Bearer ${token}` } });
export const getLowStockProducts = () => api.get('/products/low-stock');
