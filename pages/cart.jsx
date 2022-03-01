import Image from 'next/image';
import { useSelector, useDispatch} from 'react-redux';
import {
  removeFromCart,
} from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';
import { calculateDiscount } from './api/products/index';

const CartPage = ( {shoppingCartResult} ) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  return (
    <div className={styles.container}>
      {
      cart.length === 0 ? (
        <h1>No hay productos en el Carro!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Imagen</div>
            <div>Producto</div>
            <div>Precio</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className={styles.body}>
              <div className={styles.image}>
                <Image src={'https://' + item.image} height="90" width="65" />
              </div>
              <p>{item.brand} : {item.description}</p>
              <p>$ {item.price}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2> Total: $ {shoppingCartResult.totalValue}</h2>
          <h2>  {shoppingCartResult.messageDiscount}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;

export async function getServerSideProps(context) {

  const { productCart } = context.query;
  const shoppingCartResult = await calculateDiscount(productCart)
  
  if(!(shoppingCartResult === undefined)){
    return { props: { shoppingCartResult } };
  }
}