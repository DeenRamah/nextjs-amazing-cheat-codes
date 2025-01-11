
import express from 'express'
import { createUser } from "../controllers/userCntrl"; 

const router = express.Router()

router.post("/register", createUser);
