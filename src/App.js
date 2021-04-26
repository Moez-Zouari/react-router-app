import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          {/*  Je peux utiliser switch ou exact , 
          switch je dois mettre mes page dans l'ordre de plus fréquent au moin */}
          <Switch>
            <Route
              path="/products"
              render={(props) => <Products sortBy="newset" {...props} />}
            />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" /* exact  */ component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
