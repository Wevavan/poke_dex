const mongoose = require('mongoose');

const connectDataBase = async () =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDataBase;