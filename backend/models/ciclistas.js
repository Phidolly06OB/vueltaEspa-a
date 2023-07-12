import mongoose from "mongoose";

const ciclistasSchema = mongoose.Schema({
    nombre:{
        type: String,
        requiere:true,
        trim:true
    },
    numeroC:{
        type:String,
        requiere:true,
        trim:true
    }
},
{
    timestamps:true,
}
);

const Ciclistas = mongoose.model("Ciclistas", ciclistasSchema);

export default Ciclistas;