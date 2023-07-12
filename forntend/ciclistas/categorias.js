import {getCilistas, deleteCiclista} from "./API.js"

(function(){

    const formulario = document.querySelector(".det")

    document.addEventListener("DOMContentLoaded", showCategorias);

    formulario.addEventListener('click', confirmar)

    async function showCategorias(){
        const categ = await getCilistas()
        categ.forEach(ctg => {
            const {_id, nombre, numeroC} = ctg;
            
            const tabla = document.createElement('tr')
            tabla.innerHTML += `
                    <th scope="row">${_id}</th>
                    <td>${nombre}</td>
                    <td>${numeroC}</td>
                    <td><button class="btn btn-danger delete" data-ciclista="${_id}" >DELETE</button></td>
                    <td><button data-bs-toggle="modal" data-bs-target="#update  " class="btn btn-success">UPDATE</button></td>
            `
    
            document.querySelector('.det').appendChild(tabla)
        });
    }

    function confirmar(e){
        if(e.target.classList.contains('delete')){
            const cicliId = e.target.dataset.ciclista;
            const conf = confirm("¿Desea Eliminarlo?")

            if(conf){
                deleteCiclista(cicliId)
                /* window.location.href = "index.html" */
            }
        }
    }

}())
