import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal.js"
function Checkout() {
  return (
    <div className='checkout'>
      <div className="checkout_left">
        <div>
            <h2 className="checkout_title">Your shopping cart</h2>
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
