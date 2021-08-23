const express = require('express');
const router = express.Router();
const regionController = require('../controllers/regionController');

module.exports = () => {
	
	// Confirmar el email de registro
	router.get('/region/:country', regionController.getRegion);

	return router;
}