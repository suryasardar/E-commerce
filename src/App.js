import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Privateroute,
  Products,
  SingleProduct,
} from "./pages";

function App() {
  return (
    // <div>
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/privateroute">
          <Privateroute />
        </Route>
        <Route exact path="/products/:id">
          <SingleProduct />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/*">
          <Error />
        </Route>
      </Switch>

      <Footer />
    </Router>
    // </div>
  );
}
// console.log(1);

export default App;
