// these is a node coe to run the project

import express from 'express';
import dotenv from 'dotenv';
import cookiePaser from 'cookie-parser';
import cors from 'cors';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT, ()=>{
  console.log(`Server is running in ${PORT}`)
});
