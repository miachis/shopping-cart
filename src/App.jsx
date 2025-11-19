import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [cartCount, setCartCount] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.status != 200) {
          throw new Error("server error");
        }
        const data = await response.json();
        data.forEach((entry) => {
          entry.value = 1;
        });
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="container">
      <Navbar cartCount={cartCount} />
      <Outlet
        context={{
          cartCount,
          setCartCount,
          cartProducts,
          setCartProducts,
          loading,
          error,
          data,
          setData,
        }}
      />
    </div>
  );
}

export default App;
