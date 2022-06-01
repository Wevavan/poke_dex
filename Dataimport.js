const express = require('express');
const asyncHandler = require('express-async-handler');

const ModelePokemons = require('./Models/PokemonModel');
const pokemons = require('./data/Pokemons');


const Importdata = express.Router();

Importdata.post("/pokemons", asyncHandler(
    async(req,res)=>{
        await ModelePokemons.remove({});
        const listepokemon = await ModelePokemons.insertMany(pokemons);
        res.send({listepokemon});
    }
));

module.exports = Importdata;