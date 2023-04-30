import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${import.meta.env.TOKEN}`;
  config.headers["Content-Type"] = "application/json";
  config.headers.Accept = "application/json";

  return config;
});

export default axiosInstance;
