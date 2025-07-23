import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  type: { type: String, enum: ['product', 'buyer'], required: true },
  name: { type: String, required: true },
  category: String,
  price: Number,
  quantity: Number,
  description: String,
  email: String,
  phone: String,
  address: String
});

export default mongoose.model('Item', itemSchema);
