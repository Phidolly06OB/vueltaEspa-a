import express from "express";
import dotenv from "dotenv"
import conectarDB from "./config/config.js";
import ciclistasRouter from './routes/ciclistas.routes.js'
import categoriasRouter from './routes/categorias.routes.js'
import cors from "cors"

const app = express();

app.use(express.json())

dotenv.config();

app.use(cors())

app.use("/ciclistas", ciclistasRouter)
app.use("/categorias", categoriasRouter)

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})