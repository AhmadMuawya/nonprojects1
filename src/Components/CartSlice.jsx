import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItem : [] ,
};


const CartSlice = createSlice ({
    name: "cart" ,
    initialState ,
    reducers : {
        addItemToCart(state , action){
            const existing = state.cartItem.find(item => item.id === action.payload.id);
            if(existing){
                existing.quantity += 1 ;
            }else{
                state.cartItem.push({...action.payload , quantity : 1});
            }

        },
        removeItemFromCart(state , action){
            state.cartItem = state.cartItem.filter(item => item.id !== action.payload)
        },
        clearCart(state){
            state.cartItem = [] ;

        },
        increaseItemQuantity(state , action){
            const item = state.cartItem.find(item => item.id === action.payload);
            if(item) item.quantity +=1 ;

        },
        decreaseItemQuantity(state , action){
            const item = state.cartItem.find(item => item.id === action.payload);
            if(item && item.quantity > 1) item.quantity -=1 ;

        }
    }
 
});



export const {addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,} = CartSlice.actions;
  export default CartSlice.reducer ;