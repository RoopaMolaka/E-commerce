import React from 'react';
import "./style.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';


function Card({productsInfo,onAddToCart }) {
    console.log(productsInfo)
 const Navigate = useNavigate();
const dispatch = useDispatch();
  const {title,image,price,category} = productsInfo;

    const handleAddToCart = () => {
      onAddToCart(productsInfo);
      // Navigate("/Cart");
    };
  

  return (
<>
   <div>
   <img id='img-thumbnail'
   src={image}
   />
   <p><b>Title:</b> {title} </p>
   <p><b>Category:</b> {category} </p> 
   <p><b>Price:</b> {price}$ </p>
   <button class="bg-warning rounded-2 border border-0 p-2 text-center " onClick={handleAddToCart} >Add To Cart</button>
   

   
</div>

</>
  )
}

export default Card;