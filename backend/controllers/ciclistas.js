import Ciclistas from "../models/ciclistas.js";

const getCiclis = async (req, res) =>{

    const ciclistas = await Ciclistas.find();

    res.json(ciclistas);

}

const addCiclista = async (req, res) =>{

    const ciclista = new Ciclistas(req.body);

    try {
        const nuevociclista = await ciclista.save();

        res.json(nuevociclista);
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{

    try {
        await Ciclistas.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(500)
        res.send({error: "Ciclista no existe"})
    }
}

export { getCiclis, addCiclista, borrar };