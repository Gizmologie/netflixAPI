// Imports des modules
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// configuration de l'app
app.use(bodyParser.urlencoded({extend: false})); // encodé les url avec du JSON dedans
app.use(bodyParser.json());
app.use(cors({origin: true}));

app.listen(process.env.APP_PORT, ()=> {
    console.log(`Le serveur est connecté sur le port ${process.env.APP_PORT}...`);
})