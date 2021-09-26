import React from "react";
import "./Cart.css";
import HiredInfo from "../HiredInfo/HiredInfo";
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const engineer of cart) {
    total = total + parseFloat(engineer.salary);
    console.log(engineer.salary);
  }
  return (
    <div className="cart-container">
      <div className="cart">
        <h3>Order Summary</h3>
        <p><b>Engineers Hired:</b> {props.cart.length}</p>
        <p className="total-price"><b>Total:</b>${total.toFixed(2)}</p>
        {cart.map((engineer) => (
          <HiredInfo hiredInfo={engineer} key={engineer.phone}></HiredInfo>
        ))}
      </div>
    </div>
  );
};

export default Cart;
