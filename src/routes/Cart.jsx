import { useOutletContext } from "react-router";

function Cart() {
  const { cartProducts } = useOutletContext();
  return cartProducts.length > 0 ? (
    cartProducts.map((product) => {
      return (
        <div key={product.id}>
          <h1>{product.image}</h1>
          <h1>{product.title}</h1>
          <h1>{product.price}</h1>
          <h1>{product.quantity}</h1>
          <button>Buy Now</button>
        </div>
      );
    })
  ) : (
    <h1>Cart is empty</h1>
  );
}

export default Cart;
