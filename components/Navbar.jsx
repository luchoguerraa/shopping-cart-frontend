import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const productsCart = JSON.stringify(cart);
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.navlink}>
          <Link href={{ pathname: '/cart', query: { productCart: productsCart } }}>
            <p>Cart ({getItemsCount()})</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
