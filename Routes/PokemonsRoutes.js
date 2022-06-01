const express = require('express');
const asyncHandler = require('express-async-handler');
const ModelePokemons = require('../Models/PokemonModel');

const PokemonsRoutes = express.Router()

//GET ALL POKEMONS
PokemonsRoutes.get("/", asyncHandler(
    async(req,res)=>{
        const pokemons = await ModelePokemons.find({});
        res.json(pokemons);
    }
));

//GET SINGLE POKEMON
PokemonsRoutes.get("/:id", asyncHandler(
    async(req,res)=>{
        const pokemon = await ModelePokemons.findById(req.params.id);
        if (pokemon) {
            res.json(pokemon);
        }else{
            res.status(404);
            throw new Error("Product not Found");
        }
    }
));



module.exports = PokemonsRoutes;