const mongoose = require('mongoose');
const Cover = mongoose.model('Cover');

module.exports = {

  //Read Cover
  async index(req, res) {
    const { page = 1 } = req.query;
    const cover = await Cover.paginate({}, { page, limit: 10 });

    return res.json(cover);
  },

  // Read one Cover
  async show(req, res) {
    const cover = await Cover.findById(req.params.id);

    return res.json(cover);
  },

  // Create
  async store(req, res) {
    const cover = await Cover.create(req.body);

    return res.json(cover);
  },

  // Update
  async update(req, res) {
    const cover = await Cover.findByIdAndUpdate(req.params.id, req.body, //Busca o produto e atualiza
      { new: true } // retornar atualizado, com o new volta o titulo novo
    );
    
    return res.json(cover);
  },

  // Delete
  async destroy(req, res) {
    await Cover.findByIdAndRemove(req.params.id);

    return res.send();
  }
};