const token = localStorage.getItem("token");

axios.post("http://localhost:8080/api/cart/create", requestData, {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  },
  withCredentials: true 
});