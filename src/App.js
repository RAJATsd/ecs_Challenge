import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import CheckoutComponent from "./pages/checkout/checkout.component";
import UserheaderComponent from "./components/user-header/user-header.component";
import HomepageComponent from "./pages/homepage/homepage.component";
import CartPageComponent from "./pages/cart/cart.component";

function App() {
  const [booksList, setBooksList] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log('running');
    axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json')
    .then(res => {
      res.data.sort((a, b) => {
      if (a.ratings_count < b.ratings_count) return 1;
      else if (a.ratings_count > b.ratings_count) return -1;
      else return 0;
      });
      setBooksList(booksList.concat(res.data));
    })
    .catch(err => console.log(err));
  }, []);

  const handleAddToCart = (book) => {
    const existingItem = cart.find((item) => item.bookID === book.bookID);
    if (existingItem) {
      return setCart(
        cart.map((item) =>
          book.bookID === item.bookID
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
    return setCart([...cart, { ...book, quantity: 1 }]);
  };

  const handleRemoveFromCart = (itemToRemove) => {
    const cartItem = cart.find((ele) => ele.bookID === itemToRemove.bookID);
    if (cartItem.quantity === 1) {
      return setCart(
        cart.filter((item) => item.bookID !== itemToRemove.bookID)
      );
    }
    setCart(
      cart.map((ele) =>
        ele.bookID === itemToRemove.bookID
          ? { ...ele, quantity: ele.quantity - 1 }
          : ele
      )
    );
  };

  return (
    <div className="App">
      <UserheaderComponent cart={cart} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageComponent
              handleAddToCart={handleAddToCart}
              booksList={booksList}
            />
          )}
        />
        <Route
          exact
          path="/cart"
          render={() => (
            <CartPageComponent
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          )}
        />
        <Route
          exact
          path="/checkout"
          render={() => <CheckoutComponent cart={cart} setCart={setCart} />}
        />
      </Switch>
    </div>
  );
}

export default App;
