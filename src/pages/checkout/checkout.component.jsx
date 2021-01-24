import React,{useState} from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import OrderPlacedComponent from '../../components/order-placed/order-placed.component';
import "./checkout.styles.css";

const Checkout = ({ cart , setCart }) => {
  const [orderPlacedHidden, setOrderPlacedHidden] = useState(true)
  const handleUnhide = () => {
    setOrderPlacedHidden(!orderPlacedHidden);
    setCart([]);
  }
  return (
    <div className="checkout">
      <OrderPlacedComponent hidden = {orderPlacedHidden}/>
      <div className="checkout-form">
        <div className="checkout-form__forms">
          <div className="checkout-form-address">
            <h2>Billing Address</h2>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="name" id="fullName" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" />
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />
            <div className="checkout-form-address__state-and-zip">
              <div>
                <label htmlFor="state">State</label>
                <input type="text" name="state" id="state" />
              </div>
              <div>
                <label htmlFor="zip">Zip</label>
                <input type="number" name="zip" id="zip" />
              </div>
            </div>
          </div>
          <div className="checkout-form-payment">
            <h2>Payment</h2>
            <label htmlFor="cardName">Name on the card</label>
            <input type="text" name="cardName" id="cardName" />
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" name="cardNumber" id="cardNumber" />
            <label htmlFor="expMonth">Exp Month</label>
            <input type="number" name="expMont" id="expMonth" />
            <div className="checkout-form-payment__year-and-cvv">
              <div>
                <label htmlFor="expYear">Exp Year</label>
                <input type="number" name="expYear" id="zip" />
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <input type="number" name="cvv" id="cvv" />
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleUnhide}>Proceed To Checkout</button>
      </div>
      <div className="checkout-items">
        <div className="checkout-items-row" style={{marginBottom:'16px'}}>
          <h3>Cart</h3>
          <ShoppingCartIcon />
        </div>
        {cart.map((item) => (
          <div key={item.bookID} className="checkout-items-row">
            <h3 className="checkout-items-row__title">{item.title}</h3>
            <h3>{`${item.quantity} * ${item.price}`}</h3>
          </div>
        ))}
        <div className="checkout-items-row items-total">
          <h3>Total</h3>
          <h3>
            {cart.reduce((sum, ele) => sum + ele.price * ele.quantity, 0)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
