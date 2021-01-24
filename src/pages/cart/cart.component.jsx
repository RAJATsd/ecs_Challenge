import React from "react";
import {Link} from 'react-router-dom';

import "./cart.styles.css";

const CartPage = ({ cart , handleAddToCart , handleRemoveFromCart}) => {
  return (
    <div className="cart">
      {cart.length === 0 ? (
        <div className="cart-empty">
          <img src="https://cdn.dribbble.com/users/204955/screenshots/4930541/emptycart.png" alt=""/>
          <h1>The Cart Is Empty</h1>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-container-items">
            <div className="cart-container-items-header">
              <div className="cart-container-items-header__heading">Title</div>
              <div className="cart-container-items-header__heading">
                Quantity
              </div>
              <div className="cart-container-items-header__heading">Price</div>
              <div className="cart-container-items-header__heading">Amount</div>
            </div>
            {cart.map((item) => (
              <div key={item.bookID} className="cart-container-items-item">
                <div className="cart-container-items-item__value">
                  {item.title}
                </div>
                <div className="cart-container-items-item__value quantity">
                  <div className="arrow" onClick={() => handleRemoveFromCart(item)}>
                    &#10094;
                  </div>
                  <span className="value">{item.quantity}</span>
                  <div className="arrow" onClick={() => handleAddToCart(item)}>
                    &#10095;
                  </div>
                </div>
                <div className="cart-container-items-item__value">
                  {item.price}
                </div>
                <div className="cart-container-items-item__value">
                  {item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-container-total-and-checkout">
            <div className="cart-container-total-and-checkout__total">
              <h3>Total :</h3>
              {cart.reduce((sum, ele) => sum + ele.price * ele.quantity, 0)}
            </div>
            <Link to="/checkout" style={{textDecoration:"none"}}>
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
