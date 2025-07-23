// frontend/src/utils/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // Or full backend URL
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
