const express = require('express');
const mongooose = require('mongoose');
const authRouter = require('./Routers/auth');
mongooose.set('strictQuery',true);
const PORT = 5000 || process.env.PORT;
const app = express();

app.use(express.json());
app.use(authRouter);

const DB ='mongodb+srv://shivam:shivam@cluster0.lerilml.mongodb.net/?retryWrites=true&w=majority';

mongooose.connect(DB).then(()=>{
    console.log("Connection was successful");
}
).catch((e)=>{
    console.log(e);
})

app.listen(PORT,'0.0.0.0', ()=>{
   console.log(`Server started at port ${PORT}`);
});
