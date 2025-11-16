import { Outlet } from "react-router";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [cartCount, setCartCount] = useState(null);
  return (
    <div className="container">
      <Navbar cartCount={cartCount} />
      <Outlet context={[cartCount, setCartCount]} />
    </div>
  );
}

export default App;
