/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Header_Brand from "./Header_Brand";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer";
import Brand from "./brand";
import Shop from "./shop";
import About from "./About";
import Contact from "./Contact";
import Privacy from "./Privacy";
import Terms from "./Terms";

const promise = loadStripe(
  "pk_test_51O8gAdSIAar7v431HwpCR4J2kUXvNpFgEKIxiYURwSpHkz5n5D0Nlkiqffzi9JbsxRTVVijyDW8Y1AKBiGStTGxj00rg4SL2GF"
);

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/brand">
          <Header_Brand />
          <Brand />
          <Footer/>
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

          <Route path="/about">
            <About />
            <Footer />
          </Route>

          <Route path="/contact">
            <Contact />
            <Footer />
          </Route>

          <Route path="/privacy">
            <Privacy />
            <Footer />
          </Route>

          <Route path="/terms">
            <Terms />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
