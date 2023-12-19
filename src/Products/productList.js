import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Card from '../Card/card';
import "./style.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

function ProductList({filteredItem}) {
  console.log(filteredItem);

 const [products,setProducts]=useState([])
 const dispatch=useDispatch();

useEffect(()=>{
axios.get("https://fakestoreapi.com/products")
       .then((res)=>{
       setProducts(res.data);})
       .catch((err)=>{
        console.log(err)
       })
    },[])

    const filterredUsers = products.filter((product) =>
      product.title.toLowerCase().includes(filteredItem.toLowerCase())
    );
   const handleAddToCart=(productsInfo)=>{
    dispatch(addToCart(productsInfo))
   }
    
  return (
    <>
    
    <div className='mt-5' id='div-wrapper'>
  { filterredUsers.map( (product, i) =>{

      return <div id='card-wrapper' className="rounded-2 shadow p-3 mb-5 bg-body-tertiary "><Card productsInfo={product} onAddToCart={handleAddToCart}/>
      </div>
    })}
    </div>
    </>
  )
}

export default ProductList;