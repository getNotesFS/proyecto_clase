/*Controladores para la Collection Locations*/

/*GET -> Mi Homepage*/
const homeList = (req, res) => {
  res.render('index', { 
    title: 'Mi Página de Inicio',
    nombre: 'Sebastian',
    apellido: 'Mármol',
    direccion: 'Calle Guayaquil, Tumbaco',
    edad: '22',
    telefono: '0923456789',
    materias: 'Web 3, Taller de Investigación',
    fecha: '5 de octubre deñ 2020'
  
  });
}

/*GET -> Location Information*/

const locationInfo = (req, res) => {
    res.render('index', { title: 'Location Information' });
  }

  /*GET -> Add Reviews*/

const addReview = (req, res) => {
  res.render('index', { title: 'Add Reviews' });
}

  module.exports =  {
      //separador de módulos con una "COMA"
      homeList,
      locationInfo,
      addReview

  }