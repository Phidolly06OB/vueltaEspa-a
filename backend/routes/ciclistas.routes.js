import express from "express";

const router = express.Router();

import { getCiclis, addCiclista, borrar } from "../controllers/ciclistas.js"; 

router.get("/all", getCiclis)

router.post("/add", addCiclista)

router.delete("/del/:id", borrar)

export default router