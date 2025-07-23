import express from 'express';
import Item from '../models/Item.js';
const router = express.Router();

// Get all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch items', error: err });
  }
});

// Add new item
router.post('/', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.json({ message: 'Item added successfully', data: newItem });
  } catch (err) {
    res.status(400).json({ message: 'Failed to add item', error: err });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete item', error: err });
  }
});

export default router;
