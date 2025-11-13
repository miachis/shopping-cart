import { useEffect, useState } from "react";

function Shop() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.status != 200) {
          throw new Error("server error");
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>There is an Error</h1>;

  return (
    <div className="products-container">
      {data.map((product) => {
        return (
          <div key={product.id} className="product">
            <div>
              <img
                src={product.image}
                alt={product.description}
                width={208}
                height={211}
              />
              <p className="product-name">{product.title}</p>
              <p className="product-price">${product.price}</p>
              <div className="product-number">
                <input type="text" className="product-count" />
                <button className="product-btn">+</button>
                <button className="product-btn">-</button>
              </div>
              <button className="add-to-cart">Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
