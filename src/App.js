import React,{useState} from 'react'
import ProductList from './Products/productList';
import {  Route, Routes } from 'react-router-dom';
import Cart from './Cart/cart';
import Home from './Home';
// import { Link } from 'react-router-dom';
import "./App.css"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
let navigate = useNavigate()
const[filterpoducts,setfilterpoducts] = useState("")

  
  const cartItems = useSelector((state) => state.cart);
  const uniqueItemCount = React.useMemo(() => {
    return cartItems.length > 0 ? new Set(cartItems.map(item => item.id)).size : "";
  }, [cartItems]);

  return (
    <>
       <div className="container-fluid " id='head-style'>
          <div>
           <h1 className='shop-head'>Konukko Bro<i class="fa-brands fa-shopify"></i></h1>
          </div>
          <div>
            <button className="btn px-4" onClick={()=>{navigate("/")}} > <i class="fa fa-home"></i>Home</button>
          </div>
          <div>
            <button className="btn px-4" onClick={()=>{navigate("/ProductList")}} ><i class="fa-brands fa-shopify"></i>Products</button>
          </div>

          <div class="form-group has-search ">
            <span class="fa fa-search form-control-feedback"></span>
            <input
              value={filterpoducts}
              type="text"
              className="form-control py-2"
              placeholder="Search Products"
 onChange={(e) => { setfilterpoducts(e.target.value) }}
 onClick={()=>{navigate("/ProductList")}}  />
          </div>
          <div>
            <button className="btn px-3" onClick={()=>{navigate("/Cart")}}  ><i class="fa-solid fa-cart-shopping" ></i> Cart <span className='border border-1 rounded-3 px-3 ms-2'>{ uniqueItemCount}</span></button>
            
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/ProductList' element={<ProductList filteredItem={filterpoducts} />} />
        </Routes>
        
    </>
  )
}

export default App;