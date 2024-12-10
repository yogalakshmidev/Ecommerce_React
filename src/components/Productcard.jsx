import React from "react";
import Card from "./Card";

const Productcard = ({ products, addItem, removeItem, addedItems }) => {
  products.map((product) => (product.isAdded = true));
  return (
    <div className="card__body">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      ))}
    </div>
  );
};

export default Productcard;
