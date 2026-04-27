const express = require('express');
const router = express.Router();
const service = require('../services/pelicula.service');

router.get('/', async (req, res) => {
  const data = await service.getAll();
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const data = await service.getById(req.params.id);
  if (!data) return res.status(404).json({ message: 'No encontrada' });
  res.json(data);
});

router.post('/', async (req, res) => {
  const data = await service.create(req.body);
  res.status(201).json(data);
});

router.put('/:id', async (req, res) => {
  const data = await service.update(req.params.id, req.body);
  if (!data) return res.status(404).json({ message: 'No encontrada' });
  res.json(data);
});

router.delete('/:id', async (req, res) => {
  const data = await service.remove(req.params.id);
  if (!data) return res.status(404).json({ message: 'No encontrada' });
  res.json({ message: 'Eliminada' });
});

module.exports = router;