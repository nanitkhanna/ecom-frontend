const token = localStorage.getItem("token");

axios.post(`${import.meta.env.VITE_BACK_END_URL}/cart/create`, requestData, {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  },
  withCredentials: true 
});