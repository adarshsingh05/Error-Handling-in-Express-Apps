const express = require('express');
const app = express();

const verifyme = (req, res, next) => {
    const { password } = req.query;
    if (password === 'mk') {
        next(); // If the password is correct, proceed to the next middleware or route handler
    } else {
        res.send('You need a password'); // If the password is incorrect, send a response and don't call next()
    }
};

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

app.get('/dogs', verifyme, (req, res) => {
    res.send("Woof");
});

app.listen(3000, () => {
    console.log("Started on port 3000");
});
