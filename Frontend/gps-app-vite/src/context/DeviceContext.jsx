import { createContext, useState, useEffect } from "react";

export const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8000";
   console.log("API URL:", apiUrl); // Añade esta línea
    fetch(`${apiUrl}/devices`)
      .then(res => res.json())
      .then(data => {
        setDevices(data);
      })
      .catch(err => console.error("Error fetching devices:", err));
  }, []);

  return (
    <DeviceContext.Provider value={{ devices }}>
      {children}
    </DeviceContext.Provider>
  );
};