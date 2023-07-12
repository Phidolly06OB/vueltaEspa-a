import Categorias from "../models/categorias.js";

const getCateg = async (req, res) =>{

    const categorias = await Categorias.find();

    res.json(categorias);

}

const addCateg = async (req, res) =>{

    const categoria = new Categorias(req.body);

    try {
        const nuevaCategoria = await categoria.save();

        res.json(nuevaCategoria);
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{

    try {
        await Categorias.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(500)
        res.send({error: "Categoria no existe"})
    }
}

export { getCateg, addCateg, borrar};