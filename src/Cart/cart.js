import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from './cartProduct';
import "./style.css"

function Cart() {
  const CartProducts = useSelector(state => state.cart);
const totalAmount=CartProducts.reduce((total,item)=>total+item.price,0)
const totalCount=CartProducts.reduce((total,item)=>total+item.numberOfProducts,0)
  return (
    <div className='text-center'>
       <h2>Total Amount: ${totalAmount.toFixed(2)} </h2>
      {CartProducts.length === 0 ? (
        <p>Nothing is added to your cart</p>
      ) : (
        <div  className='cart-div-wrapper align-items-center' >
          {CartProducts.map((item, index) => (
            <CartProduct key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
