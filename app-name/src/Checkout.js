import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal.js"
import {useStateValue} from './StateProvider'
import CheckoutProducts from './CheckoutProducts';
function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout_left">
        <div>
            <h2 className="checkout_title">Your shopping cart</h2>
            {basket.map(item => (
              <CheckoutProducts
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))}
            {/**Cart Items */}
            {/**Cart Items */}
            {/**Cart Items */}
            {/**Cart Items */}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
