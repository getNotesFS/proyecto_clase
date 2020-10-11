//requerir el modulo express y otros
const express = require('express');
const router = express.Router();

//const ctrlLocations = require('../controllers/locations');
//requerir controladores
const ctrlUsers = require('../controllers/users');

//definir rutas paara las acciones definidas para la colección users
// locations
router
    .route('/users')
    .post(ctrlUsers.userCreate) //crea un usuario
    .get(ctrlUsers.userList); //enlista usuario
    
router
    .route('/users/:userid') 
    .get(ctrlUsers.userRead) //lee usuario específico por id
    .put(ctrlUsers.userUpdate) //actualiza
    .delete(ctrlUsers.userDelete); //elimina


module.exports = router;