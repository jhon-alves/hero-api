const express = require('express');
const CoverController = require('./controllers/CoverController');
const routes = express.Router();

// Primeira Rota
routes.get('/covers', CoverController.index);
routes.get('/covers/:id', CoverController.show);
routes.post('/covers', CoverController.store);
routes.put('/covers/:id', CoverController.update);
routes.delete('/covers/:id', CoverController.destroy);

module.exports = routes;