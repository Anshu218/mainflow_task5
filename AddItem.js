import { useState } from 'react';
import axios from 'axios';

function AddItem({ onAdd }) {
  const [type, setType] = useState('product');
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    description: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { type, ...formData };
    await axios.post('http://localhost:5000/api/items', data);
    alert('Item added successfully');
    onAdd();
    setFormData({ name:'', category:'', price:'', quantity:'', description:'', email:'', phone:'', address:'' });
  };

  return (
    <div>
      <h2>Add {type === 'product' ? 'Product' : 'Buyer'}</h2>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="product">Product</option>
        <option value="buyer">Buyer</option>
      </select>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required /><br/>
        {type === 'product' && (
          <>
            <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" /><br/>
            <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" type="number" /><br/>
            <input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" type="number" /><br/>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea><br/>
          </>
        )}
        {type === 'buyer' && (
          <>
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" /><br/>
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" /><br/>
            <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" /><br/>
          </>
        )}
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddItem;
