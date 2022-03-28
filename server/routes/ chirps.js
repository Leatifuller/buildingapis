const express = require('express');
const chirpstore = require('../chirpstore');

const router = express.Router();

router.get('/id', (req, res)=> {
    if (req.params.id) {
     const chirps = chirpstore.GetChirp(req.params.id);  
     res.send(chirps) 
    } else {

        const chirps = chirpstore.GetChirps();
        delete chirps.nextid;
        const tempArr = Object.entries(chirps)
        console.log(tempArr); 
        const chirpArr = tempArr.map(chirp => {
            const newChirp = {
                id: chirp[0],
                name: chirp[1].name,
                chirp: chirp[1].Chirp,
            }
            return newChirp
        })
        chirpArr.reverse()
        res.send(chirpArr);
    }
});

router.post('/', (req, res) =>{
    console.log(req.body)
    chirpstore.CreateChirp(req.body)
    res.send(200)
});

router.delete('/:id',(req, res) =>{
    chirpstore.DeleteChirp(req.params.id)
    res.send(200)
});

router.put('/:id', (req, res)=> {
    const id = req.params.id;
    const chirp = req.body;
    chirpstore.UpdateChirp(id, chirp);
    res.send(200);
});


module.exports = router;