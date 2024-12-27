//using noje js at the backend creating a new user

import express from 'express'
import { createUser } from "../controllers/userCntrl"; 

const router = express.Router()

router.post("/register", createUser);
