import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './routes/route.js';

const app = express();
mongoose.connect('mongodb+srv://mrizqiassh:Password@tokopediaplay.sishp75.mongodb.net/tokopediaPlay',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors(
    {
        origin: 'https://tokopedia-play-frontend-five.vercel.app',
        methods: ['GET', 'POST'],
        credentials: true
    }
));

// Handle preflight requests
app.options('/videos/:videoId/comments', cors());

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => {
    console.log('Database Connected...')
    app.use(cors());
    app.use(express.json());
    app.use(route);

    app.listen(5000, ()=> console.log('Server up and running at port 5000'));
});

