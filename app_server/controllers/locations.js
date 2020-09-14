/*Controladores para la Collection Locations*/

/*GET -> Mi Homepage*/
const homeList = (req, res) => {
  res.render('index', { title: 'Mi Página de Inicio' });
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