import React from "react";
import "./productList.css";
// Be sure to uncomment this line before trying to use the Product component!
import Product from "./product";

function ProductList(props) {
  return (
    <div className="ProductList">
      <Product
        add={props.addToShoppingCart}
        removeFromShoppingCart={props.removeFromShoppingCart}
        name={props.inventory[0].name}
        price={props.inventory[0].price}
      />

      <Product
        add={props.addToShoppingCart}
        removeFromShoppingCart={props.removeFromShoppingCart}
        name={props.inventory[1].name}
        price={props.inventory[1].price}
      />

      <Product
        add={props.addToShoppingCart}
        removeFromShoppingCart={props.removeFromShoppingCart}
        name={props.inventory[2].name}
        price={props.inventory[2].price}
      />

      <Product
        add={props.addToShoppingCart}
        removeFromShoppingCart={props.removeFromShoppingCart}
        name={props.inventory[3].name}
        price={props.inventory[3].price}
      />

      <Product
        add={props.addToShoppingCart}
        removeFromShoppingCart={props.removeFromShoppingCart}
        name={props.inventory[4].name}
        price={props.inventory[4].price}
      />
    </div>
  );
}

export default ProductList;
