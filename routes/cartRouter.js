import express from "express";
import * as cartController from "../controllers/cartController";
import { validateToken } from "../middlewares";

const cartRouter= express.Router();

cartRouter
.post('/',validateToken,cartController.createCart)
.get('/',validateToken,cartController.getCart);

export default cartRouter;
