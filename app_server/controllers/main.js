const homepageController = (req, res) => {
    res.render('index', { title: 'Mi Segundo Express' });
  }

  module.exports =  {
      //separador de módulos con una "COMA"
    homepageController
  }