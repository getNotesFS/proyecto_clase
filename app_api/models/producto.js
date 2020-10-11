const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({ // definicion del esquema
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    masa: {
        tipo: {
            type: String,
            enum: ['Fina', 'Normal']
        },
        ingredientes: [String]
    },
    creado: {
        type: Date,
        'default': Date.now
    }
});

/**
 * USAR UNA LISTA EN LA APLICACIÓN PARA QUE  QUE NO GUARDE BOMBRES DE BASE DIRECTAMENTE, INTENTAR QUE EL ESQUEMA SEA LO MÁS ÓPTIMO POSIBLE
 * TYPE: (MASA FINA O NORMAL puede ir directamente como un TRUE O FALSE)
 * 
 */
const Producto = new mongoose.model('producto', productoSchema); // compilar el esquema en el modelo

const producto = new Producto({
    nombre: 'Criolla',
    categoria: 'Personal',
    descripcion: 'Choclo con tocino (4 pedazos)',
    masa: {
        tipo: 'Fina',
        nombres: ['Jamón', 'Piña', 'Choclo']
    } 
}); // crear el documento

user.save(); // guardar en DB