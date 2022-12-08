const express = require('express');
const film = require('../model/film');
const router = express.Router()

//get all films
router.get('/', async (req,res)=>{
    try
    {
        const films = await film.find();
        res.json(films)
        console.log('get all data successfully.')

    }
    catch(err)
    {
       res.json('Error!!')
    }
})

//get one film
router.get('/:id', async (req,res) => {
    try{
        const films = await film.findById(req.params.id)
        res.json(films)
        console.log('get one id successfully.')

    }catch(err){
        console.log('Error!!!!')
    }
})

//add a film
router.post('/',async (req,res) => {
    const films = new film({
        name : req.body.name,
        img : req.body.img,
        Summary : req.body.Summary
    })
    try{
        const f1 = await films.save()
        res.json(f1)
        console.log('data added')

    }catch(err){
        console.log('Error!!!!')
    }
})

//update a film
router.put('/:id', async (req,res) => {

    try{
        const films = {
            name : req.body.name,
            img : req.body.img,
            Summary : req.body.Summary
        }
        
        const f2 = await film.findByIdAndUpdate({ _id : req.params.id},films)
        res.json(f2)
        console.log("specific id updated")


    }catch(err){
        console.log(err) 
    }
})

//delete a film
router.delete('/:id', async (req,res) => {
    try{
        const films = await film.findById(req.params.id)
        console.log('deleted a film successfully of id :'+films)
        films.remove()
        res.json(films)
        

    }catch(err){
        console.log('Error!!!!')
    }
})

module.exports = router;