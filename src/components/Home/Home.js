import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {

    const [tshirts, setTshirts] = useTshirt();
    // console.log(tshirt)

    const [cart, setCart] = useState([]);

    const handleAddToCart=(selectedItem)=>{
      // console.log(selectedItem)
      const exists = cart.find(tshirt=> tshirt._id === selectedItem._id)
      if(!exists){
        let newCart=[];
        newCart = [...cart,selectedItem]
        setCart(newCart)
      }
      else{
        alert("This tshirt is already added. You can't take one tshirt in twice ! ")
      }
      
    }
    
    const handleRemoveFromCart=(selectedItem)=>{
        // console.log(selectedItem)
        const rest = cart.filter(tshirt=> tshirt._id !== selectedItem._id)
        setCart(rest)
    }

  

    return (
        <div className='home-container'>
          <div className='tshirt-container'>
             {
                tshirts.map(tshirt=> <Tshirt tshirt={tshirt} key={tshirt._id} handleAddToCart={handleAddToCart}></Tshirt>)
             }  
          </div>
          <div className='cart-container'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
          </div>
        </div>
    );
};

export default Home;