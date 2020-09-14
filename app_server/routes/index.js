/*AQUI VAN LAS RUTAS*/

const express = require('express');
const router = express.Router();

/*Importar controladores */

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/about');


/* Definir las rutas de mis páginas*/

/*1.- Locations*/

router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/*2.- About*/
router.get('/about', ctrlOthers.about);

module.exports = router;
