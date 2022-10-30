const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const UserModel = require('./models/user');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post('/register', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    UserModel.create({
        username: username,
        password: password
    })
    .then(data => {
        res.json('Create user successfully');
    })
    .catch(err => {
        res.status(500).json('Create user failed    ');
    }) 
});

app.get('/', (req, res, next) => {
    res.json('Home')
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
