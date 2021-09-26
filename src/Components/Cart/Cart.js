import React from "react";
import "./Cart.css";
import HiredInfo from "../HiredInfo/HiredInfo";
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const engineer of cart) {
        total = total + parseFloat(engineer.salary);
        console.log(engineer.salary)
    }
  return (
    <div>
      <h2>Cart</h2>
          <p>Engineers Hired: {props.cart.length}</p>
          <p>Total:{total.toFixed(2)}</p>
      {cart.map((engineer) => (
        <HiredInfo hiredInfo={engineer} key={engineer.phone}></HiredInfo>
      ))}
    </div>
  );
};

export default Cart;
