const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Homepage");
});

// this shows an error which will be handled by the express
app.get('/hommer', (req, res) => {
    // as this hommer doesnot exist in the file it will show undefined as - cannot get hommer
    res.render("Hommer");
    // we can prevent and add our own error handle message as
    // throw new Error('not found')
});

app.get('/dogs',(req, res) => {
    res.send("Woof");
});

// our custom error handler executed whenever the errorful route is renderes
app.use((err,req,res,next)=>{
    console.log("error");
    // console.log(err);
    // passing the error to the next error handler
    next(err);
})

app.listen(3000, () => {
    console.log("Started on port 3000");
});
