import React, { Component } from "react";
import "./App.css";
import ShoppingCart from "./Components/shoppingCart";
import ProductList from "./Components/productList";
import Hero from "./Components/hero";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: 0
    };
  }

  // Inventory - we might normally prefer to use a database, but this is a good placeholder.
  inventory = [
    { name: "Kiara", price: 150 },
    { name: "Bah", price: 1.25 },
    { name: "Noemi", price: 150 },
    { name: "Jibril", price: 150 },
    { name: "Dares", price: 150 }
  ];
  // The add and remove functions should update the state's cart and the total.
  // The add function has been built already. The remove function has not.
  addToShoppingCart = (item) => {
    let total = this.state.total;
    if (item == "Kiara") {
      total += 1.99;
    }
    if (item == "Bah") {
      total += 1.5;
    }
    if (item == "Noemi") {
      total += 2.5;
    }
  
  if (item == "Jibril") {
    total += 2.5;
  }
    this.setState((state) => {
      state.cart.push(item);
      return state;
    });
    this.setState({ total: total });
  };

  removeFromShoppingCart = (item) => {
    const cart = this.state.cart;
    let index = cart.indexOf(item);
    if (index !== -1) {
      cart.splice(index, 1);
    }
    this.setState((state) => {
      return state;
    });
  };

  render() {
    return (
      <div className="App">
        <Hero />
        <ShoppingCart
          items={this.state.cart}
          total={this.state.total}
          inventory={this.inventory}
        />
        <div className="main">
          <ProductList
            inventory={this.inventory}
            add={this.addToShoppingCart}
            remove={this.removeFromShoppingCart}
          />
        </div>
      </div>
    );
  }
}

export default App;