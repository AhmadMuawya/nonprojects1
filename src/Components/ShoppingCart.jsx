import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Assuming you have action creators for increasing and decreasing item quantity
import './ShoppingCart.css';

const ShoppingCart = () => {
    const dispatch = useDispatch() ;
    const cartItem = useSelector(state => state.cart.cartItem);
   
    const totalAmount = cartItem.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleClearCart = () => {dispatch(clearCart())};
    const handleRemoveItem = (i) => {dispatch(removeItemFromCart(i))};
    const handleIncreaseQuantity = (i) => {dispatch(increaseItemQuantity(i))};
    const handleDecreaseQuantity = (i) => {dispatch(decreaseItemQuantity(i))};

  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
       {cartItem.map((item)=>(
        <li key={item.id} className='cart-item'>
            <span>{item.name} - RM{item.price}</span>
            <div className="quantity-controls">
                <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span> {item.quantity}</span>
                <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
            <button className='remove-item-btn' onClick={()=>handleRemoveItem(item.id)}>Remove</button>
        </li>


       ))}
      </ul>
      <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
    </div>
       <div>{totalAmount? <div>The total Amount is RM{totalAmount}</div> : ''}</div>
  
    </>
  );
};

export default ShoppingCart;
