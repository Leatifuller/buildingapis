const express=require ('express');
const cors=request('cors');
const app= express();
const apiRouter=require('./routes');
const port=3000;

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);
app.listen(port, ()=> {
    console.log('Listen to port ${port}');
});

