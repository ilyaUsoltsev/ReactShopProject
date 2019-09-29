import React from "react";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Route, Switch } from "react-router-dom";
import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header.component.jsx";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} exact />
      </Switch>
    </div>
  );
}

export default App;
