
const { Router } = require('express');
const FetchData = require('../lib/data');
const router = Router()

router
.get('/personaje/:id', (req, res)=>{
        const { params: { id } } = req
        res.json({
            msg: "Un Endpoint que permita receptar un id en los parametros y que retorno un personaje",
        Body: FetchData.getCharacter(2),
        
        })
    })
.get("/consulta", (req, res) => {
        const {query} = req;

        res.json({
            msg: "Un Endpoint que permita receptar un array de ids en la consulta y que retorne unicamente los personajes que coincidan con los ids",
            saludo: FetchData.getSpecificCharacters(2),
        });
    })
    
.get('/pagina/:id', (req, res)=>{
        const { params: { id } } = req
        res.json({
            msg: "Un Endpoint que permita receptar un numero de pagina en la consulta y retorno los personajes de dicha pagina",
        Body: 
            FetchData.getByPage(2),
        })
    })

.get("/personajeId", (req, res) => {
        const {query} = req;

        res.json({
            msg: " Un Endpoint que permita receptar el genero y un numero de pagina (pagina es opcional) y que retorne los personajes que coincidan",
            saludo: FetchData.getByCharacterGender("garder", 2),
        });
    })
module.exports.Router = router;