const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

const CoverSchema = new mongoose.Schema({
  genero: {
    type: String,
    require: true,
  },
  idade: {
    type: String,
    require: true,
  },
  altura: {
    type: String,
    require: true,
  },
  peso: {
    type: String,
    require: true,
  },
  cor_pele: {
    type: String,
    require: true,
  },
  cor_cabelo: {
    type: String,
    require: true,
  },
  cor_olho: {
    type: String,
    require: true,
  },
});

CoverSchema.plugin(mongoosePaginate);

mongoose.model('Cover', CoverSchema);