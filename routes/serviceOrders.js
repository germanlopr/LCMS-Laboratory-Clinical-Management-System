const express = require('express');
const router = express.Router();
const ServiceOrder = require('../models/ServiceOrder');

// Get all service orders
router.get('/', async (req, res) => {
  try {
    const serviceOrders = await ServiceOrder.find().populate('patient');
    res.json(serviceOrders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new service order
router.post('/', async (req, res) => {
  const serviceOrder = new ServiceOrder(req.body);
  try {
    const newServiceOrder = await serviceOrder.save();
    res.status(201).json(newServiceOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a service order status
router.patch('/:id', async (req, res) => {
  try {
    const updatedServiceOrder = await ServiceOrder.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedServiceOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;