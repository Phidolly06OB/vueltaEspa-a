const urlApi = 'http://localhost:4001/ciclistas/all'; 
const urlDel = 'http://localhost:4001/ciclistas/del'
const urlUp = 'http://localhost:4001/ciclistas/add'

export const getCilistas = async () => {
    try {
        const respons = await fetch(urlApi);
        const result = await respons.json();
        return result;
        
    } catch (error) {
        console.log(error);    
    }
};


export const nuevoCiclista = async (categoria) => {
    try {
        await fetch(urlApi,{
            method: 'POST',
            body: JSON.stringify(categoria),
            headers: {
                'Content-Type' : 'Application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
};


export const deleteCiclista = async id => {
    try {
        await fetch(`${urlDel}/${id}`,{
            method: 'DELETE'
        })
    } catch (error) {
        
    }
};