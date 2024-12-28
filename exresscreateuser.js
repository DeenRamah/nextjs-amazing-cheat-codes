//the main file to create user after being imported from the other file

import asyncHandler from 'express-async-handler'

import {prisma} from "../config/prosmaConfig.js"

export const createUser = asyncHandler(async(req, res) =>{
  console.log("Create a user");

  let {email} = req.body;

  const userExists = await prisma.user.findUnique({where: {email: email}})
  if(!)
});
