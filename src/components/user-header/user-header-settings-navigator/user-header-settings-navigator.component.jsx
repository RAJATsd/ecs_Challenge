import React from "react";
import { Link } from "react-router-dom";

import "./user-header-settings-navigator.styles.css";

const SettingsNavigator = ({ hiddenProp, cart ,setHidden}) => {
  return (
    <div className={`settings-navigator ${hiddenProp ? "hidden-nav" : ""}`}>
      {cart.length === 0 ? (
        <div className="settings-navigator__emptycart">
          <h3>The cart is empty</h3>
        </div>
      ) : (
        <div className="settings-navigator-cart-container">
          <div className="settings-navigator-cart-container-items">
            {cart.map((item) => (
              <div
                key={item.bookID}
                className="settings-navigator-cart-container-items__item"
              >
                <h4>{item.title}</h4>
                <h4 style={{ marginLeft: "32px" }}>{item.quantity}</h4>
              </div>
            ))}
          </div>
          <div className="settings-navigator-cart-container-items__button">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <button onClick={()=>setHidden(!hiddenProp)} style={{ margin: "auto", display: "block" }}>
                Go To Cart Page
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsNavigator;
