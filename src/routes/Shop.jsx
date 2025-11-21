import { useOutletContext } from "react-router";

function Shop() {
  const {
    cartCount,
    setCartCount,
    setCartProducts,
    data,
    loading,
    error,
    setData,
  } = useOutletContext();

  const addToCart = function (id) {
    setCartCount(cartCount + 1);
    setCartProducts((prev) => {
      return [...prev, data[id - 1]];
    });
  };

  const addCountHandler = function (id) {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeCountHandler = function (id) {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            return { ...item };
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        } else {
          return item;
        }
      })
    );
  };

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
                <input
                  type="text"
                  className="product-count"
                  value={product.quantity}
                  onChange={(e) => {
                    setData((data) => {
                      return [
                        ...data,
                        (data[product.id - 1].quantity = e.target.value),
                      ];
                    });
                  }}
                />
                <button
                  className="product-btn"
                  onClick={() => addCountHandler(product.id)}
                >
                  +
                </button>
                <button
                  className="product-btn"
                  onClick={() => removeCountHandler(product.id)}
                >
                  -
                </button>
              </div>
              <button
                className="add-to-cart"
                onClick={() => {
                  addToCart(product.id);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
