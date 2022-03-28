const express=require ('express');
const cors=request('cors');
const app= express();
const apiRouter=require('./routes');

app.use(cors());
app.use(express.json());
app.listen(3000);
app.use(express.static('client'));
app.use('/api', apiRouter);
app.use(express.urlencoded({extended:true}));

