import "./Engineer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Engineer = (props) => {
  const { name, expertise, phone, email, country, salary, img } =
    props.engineer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
  return (
    <div className="card">
      <div>
        <img src={img} alt=""></img>
        <h4>{name}</h4>
        <p className="title">Expertise:{expertise}</p>
        <p>Phone:{phone}</p>
        <p>Email:{email}</p>
        <p>Country:{country}</p>
        <p>Salary:{salary}</p>
        <p>
          <button onClick={()=>props.handleHireBtn(props.engineer)}>{cartIcon} Hire Me</button>
        </p>
      </div>
    </div>
  );
};

export default Engineer;
