const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())


app.get('/login', (req, res) => {
    let opts = {
        maxAge: 900000,
        httpOnly: true
      };
    res.cookie('name', 'myName', opts)
    res.send("GET received");
})

app.get('/hello', (req, res) => {
    res.send(`Welcome ${req.cookies.name}!`);
})


const port = 3007
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))