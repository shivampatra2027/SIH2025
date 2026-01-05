import axios from "axios";

// Use env variable in production, localhost in dev
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : import.meta.env.VITE_API_URL; // points to backend domain

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
