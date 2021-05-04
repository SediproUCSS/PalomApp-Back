const Disponibilidad = require('../models/disponibilidad');

module.exports = function (app) {

  app.get('/disponibilidad',(req,res)=>{
    Disponibilidad.getDisponibilidad((err,data)=>{
      res.status(200).json(data);

    });
  });
}
