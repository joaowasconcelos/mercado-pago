import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import home from './src/controller/index.js';
import paymentData  from "./src/controller/payament.js";

const app = express();
app.use(express.json());
app.use(cors());


// Rota que usa o controller
app.get('/home', home);
app.post('/payment', paymentData);

app.listen(3000, () => console.log("API rodando na porta 3000"));

// https.createServer({
//     cert: fs.readFileSync('src/SSL/code.crt'),
//     key: fs.readFileSync('src/SSL/code.key')
// }, app).listen(3001, () => console.log("Rodando em HTTPS na porta 3001"));
