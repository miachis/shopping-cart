import { Link } from "react-router";
import styles from "../Navbar/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div className={styles.links}>Home</div>
      </Link>
      <Link to="shop">
        <div className={styles.links}>Shop</div>
      </Link>
      <Link to="cart">
        <div className={styles.links}>Cart</div>
      </Link>
    </div>
  );
}

export default Navbar;
