const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
const db= process.env.DATABASE;
mongoose.connect(db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,     
    }).then (()=> {
    console.info('connected');
}).catch ((err) => console.log('no connection:',err)); 
