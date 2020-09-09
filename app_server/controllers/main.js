const homepageController = (req, res) => {
    res.render('index', { title: 'Mi Primer Express' });
  }

  module.exports =  {
      //separador de módulos con una "COMA"
    homepageController
  }