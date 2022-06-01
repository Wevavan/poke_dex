const express = require('express');
const asyncHandler = require('express-async-handler');
const ModelePokemons = require('../Models/PokemonModel');
const ObjectID = require("mongoose").Types.ObjectId;

const PokemonsRoutes = express.Router()
// ADD POKEMON
PokemonsRoutes.post("/", asyncHandler(
    async(req,res)=>{
        const { nom, categorie, numero, image, taille, poids, types, couleur } = req.body;
        try {
            const poke= await ModelePokemons.create({ nom, categorie, numero, image, taille, poids, types, couleur  });
            res.status(201).json({ poke: poke._id});
          
        }  catch(err) {
            res.status(200).send({ err })
        
        }
    }
));

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
            throw new Error("Pokemon not Found");
        }
    }
));

// UPDATE POKEMON
PokemonsRoutes.put("/:id", asyncHandler(
    async(req,res)=>{
        if (!ObjectID.isValid(req.params.id)) 
        return res.status(400).send("Pokemon non reconnue : " + req.params.id);
      
        const Poke = await ModelePokemons.findByIdAndUpdate(req.params.id, 
          { 
            nom: req.body.nom,  
            numero: req.body.numero,   
            taille: req.body.taille,
            poids: req.body.poids,         
            categorie: req.body.categorie,
            types: req.body.types,
            couleur: req.body.couleur,         
            image: req.body.image,
            
          }, 
          {new: true}
          );
      
        if (!Poke) return res.status(404).send('L\'identifiant est incorrect.');
      
        res.send(Poke).json({ message: "Pokemon modifié... " });
    }
));

// DELETE POKEMON
PokemonsRoutes.delete("/:id", asyncHandler(
    async(req,res)=>{
        if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);
    
      try {
        await ModelePokemons.remove({ _id: req.params.id }).exec();
        res.status(200).json({ message: "Pokemon supprime... " });
      } catch (err) {
        return res.status(500).json({ message: err });
      }
    }
));

module.exports = PokemonsRoutes;