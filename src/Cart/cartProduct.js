import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../cartSlice';
import { useState } from 'react';
import "../Card/style.css"

function CartProduct({ item }) {

  const { id, title, image, price, rating } = item;

  const dispatch = useDispatch();
  const [numberOfProducts, setNumberOfProducts] = useState(1);

  const Increment = () => {
    setNumberOfProducts(numberOfProducts + 1);
  };

  const Decrement = () => {
    if (numberOfProducts> 1) {
      setNumberOfProducts(numberOfProducts - 1);
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));

  };

  return (
    <>
        <div className='product-wrapper'>
          <img
            className='image-thumbnail'
            src={image}
          />
          <p> <b>Title:</b> {title} </p>
          <p> <b>Price:</b> {price} $ </p>
          <p> <b>Rating:</b> {rating.rate} / 5 </p>
          <div className="quantity  d-flex justify-content-center align-items-center ">

           <div className='bg-warning border border-1 rounded-3 px-2 me-2'>
             <button className=' bg-warning border border-0 rounded-3 mx-auto me-1' onClick={Decrement}>-</button>
            <span>{numberOfProducts}</span>
            <button className=' bg-warning border border-0 rounded-3 mx-auto ms-1 ' onClick={Increment}>+</button></div>
          
          <div> <button className='bg-warning border border-0  rounded-3 px-2  ' onClick={handleRemoveFromCart} > <i class="fa-solid fa-trash"></i> </button></div>
          </div>
        </div>

      
    </>
  )
}
export default CartProduct;