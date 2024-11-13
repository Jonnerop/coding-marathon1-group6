function Item({ item, index, updateQuantity, deleteItem }) {
    return (
      <li>
        <span className="item-details">{item.itemName}</span>
        <div className="item-actions">
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(index, e.target.value)}
          />
          <button onClick={() => deleteItem(index)}>Delete</button>
        </div>
      </li>
    );
  }
  
  export default Item;
  