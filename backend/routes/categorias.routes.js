import express from "express";

const router = express.Router();

import { getCateg, addCateg, borrar } from "../controllers/categorias.js";

router.get("/all", getCateg)
router.post("/add", addCateg)
router.delete("/del/:id", borrar)

export default router

