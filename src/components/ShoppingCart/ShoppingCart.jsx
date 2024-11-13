import { useState } from "react";
import Item from "./Item";
import "./ShoppingCart.css";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleItemNameChange(event) {
    setItemName(event.target.value);
  }

  function handleQuantityChange(event) {
    const value = event.target.value;
    if (Number(value) >= 0 || value === "") {
      setQuantity(value);
    }
  }

  function addItem() {
    if (
      itemName.trim() !== "" &&
      quantity.trim() !== "" &&
      parseInt(quantity) > 0
    ) {
      setItems((i) => [...i, { itemName, quantity }]);

      setItemName("");
      setQuantity("");
    }
  }

  function deleteItem(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  function updateQuantity(index, newQuantity) {
    if (parseInt(newQuantity) > 0) {
      const updatedItems = items.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      );
      setItems(updatedItems);
    }
  }

  return (
    <div className="shopping-cart">
      <h1 className="shopping-cart-title">Shopping Cart</h1>
      <div className="shopping-cart-inputs">
        <input
          type="text"
          className="shopping-cart-input"
          placeholder="Enter item"
          value={itemName}
          onChange={handleItemNameChange}
        />
        <input
          type="number"
          className="shopping-cart-input"
          placeholder="Enter quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button className="shopping-cart-button" onClick={addItem}>
          Add
        </button>
      </div>
      {items.length === 0 ? (
        <p className="shopping-cart-empty">Empty cart</p>
      ) : (
        <ol className="shopping-cart-list">
          {items.map((item, index) => (
            <Item
              key={index}
              item={item}
              index={index}
              updateQuantity={updateQuantity}
              deleteItem={deleteItem}
            />
          ))}
        </ol>
      )}
    </div>
  );
}

export default ShoppingCart;
