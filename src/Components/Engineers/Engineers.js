import "./Engineers.css";
import React, { useEffect, useState } from "react";
import Engineer from "../Engineer/Engineer";
import Cart from "../Cart/Cart";

const Engineers = () => {
  const [engineers, setEngineers] = useState([]);
  useEffect(() => {
    fetch("./engineers.json")
      .then((res) => res.json())
      .then((data) => setEngineers(data));
  }, []);

  const [cart, setCart] = useState([]);
  const handleHireBtn = (engineer) => {
    const newCart = [...cart, engineer];
    setCart(newCart);
  };
  return (
    <div className="engineers-container">
      <div className="engineers-list">
        {engineers.map((engineer) => (
          <Engineer
            engineer={engineer}
            key={engineer.phone}
            handleHireBtn={handleHireBtn}
          ></Engineer>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Engineers;
