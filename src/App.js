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
  Singleproduct,
} from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Navbar />
          <Sidebar />
          <Router exact path="/about">
            <About />
          </Router>
          <Router exact path="/ cart">
            <Cart />
          </Router>
          <Router exact path="/checkout">
            <Checkout />
          </Router>
          <Router exact path="/">
            <Home />
          </Router>
          <Router exact path="/privateroute">
            <Privateroute />
          </Router>
          <Router exact path="/products">
            <Products />
          </Router>
          <Router exact path="/*">
            <Error />
          </Router>
          <Router exact path="/products/:id" children={<Singleproduct />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
// console.log(1);

export default App;
