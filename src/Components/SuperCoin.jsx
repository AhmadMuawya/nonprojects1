import { useEffect, useState  } from "react";
import {useSelector } from 'react-redux';

const SuperCoin = ()=>{
    const [superCoin , setSuperCoin]= useState(0) ;
    const cartItem = useSelector(state => state.cart.cartItem);
    const totalAmount = cartItem.reduce((total, item) => total + item.price * item.quantity, 0);

useEffect(()=>{
    if (totalAmount >= 100 && totalAmount < 200) {
        setSuperCoin(10);
      } else if (totalAmount >= 200 && totalAmount < 300) {
        setSuperCoin(20);
      } else if (totalAmount >= 300) {
        setSuperCoin(30);
      } else {
        setSuperCoin(0);
      }

},[totalAmount]);
return(
<>
<div className="super-coins" style={{textAlign:"center"}}>
<h2>Super Coins</h2>
<p>You will earn {superCoin} super coins with this purchase</p> 

</div>
</>


);
};
export default SuperCoin ;