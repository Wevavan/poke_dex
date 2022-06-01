const express = require('express');
const dotenv = require('dotenv');
const connectDataBase = require('./config/MongoDb');
const Importdata = require('./Dataimport');
const PokemonsRoutes = require('./Routes/PokemonsRoutes');


const app = express();
dotenv.config();
connectDataBase();

// API
app.use("/api/pokemons", PokemonsRoutes);
app.use("/api/import", Importdata);


app.get('/', (req,res)=>{
    res.send('APP IS RUNNING');
})

const PORT = process.env.PORT || 1000;


app.listen(PORT, console.log(`Server is running in port ${PORT}`));