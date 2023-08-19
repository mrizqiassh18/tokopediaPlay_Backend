import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './routes/route.js';

const app = express();
mongoose.connect('mongodb+srv://mrizqiassh:Password@tokopediaplay.sishp75.mongodb.net/tokopediaPlay',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => {
    console.log('Database Connected...')
    app.use(cors());
    app.use(express.json());
    app.use(route);

    app.listen(5000, ()=> console.log('Server up and running at port 5000'));
});

