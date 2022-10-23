import React from 'react';
import Tshirt from '../Tshirt/Tshirt';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    

//Conditional Rendering Options
    // 1. Element variable
    let command ;
    if(cart.length=== 0){
      command = <p>Please Add at least one item</p>
    }
    else{
      command = <p> Thanks for adding items</p>
    }

    //2. Ternart Operator
      // condition ? true : false

    //3. And operator (shortHand)

    //4. 



  return (
        <div>
          <h2>ItemsSelected: {cart.length}</h2>
          
         {
          cart.map(tshirt=> <p>{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt)}>X</button> </p>)
         }

          {
            command
          }

          {
            cart.length === 3 && <div className='orange'> <h3>You Added 3 Items! Good ! Add more !</h3> </div>
          }

          {
            cart.length !== 4 ? <p>Keep Adding!</p> : <button>Remove All</button>
          }
          {
            cart.length === 0 || <p className='orange'>YaaaaaY! You are buying !</p>
          }
          {
            cart.length ===4 && <button className='orange'>Review Order</button>
          }
        </div>
    );
};

export default Cart;