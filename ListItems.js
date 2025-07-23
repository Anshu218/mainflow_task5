import { useEffect, useState } from 'react';
import axios from 'axios';

function ListItems() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/api/items');
    setItems(res.data);
  };

  const deleteItem = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      await axios.delete(`http://localhost:5000/api/items/${id}`);
      alert('Item deleted successfully');
      fetchItems();
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h2>All Products/Buyers</h2>
      {items.map(item => (
        <div key={item._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{item.name} ({item.type})</h3>
          {item.type === 'product' ? (
            <p>{item.category} | ${item.price} | Qty: {item.quantity}</p>
          ) : (
            <p>{item.email} | {item.phone} | {item.address}</p>
          )}
          <button onClick={() => deleteItem(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ListItems;
