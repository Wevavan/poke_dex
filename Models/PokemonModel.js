const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema(
    {
      nom: {
        type: String,
        required: true,
        unique: true,
      },
      numero: {
        type: String,
        required: true,
        unique: true,
      },
      categorie: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
        unique: true,
      },
      couleur: {
        type: String,
        required: true,
      },
      types: {
        type: String,
        required: true,
      },
      taille: {
        type: String,
        required: true,
      },
      poids: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
);

const ModelePokemons = mongoose.model("ModelePokemons", pokemonSchema);

module.exports = ModelePokemons;