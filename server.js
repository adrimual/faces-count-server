const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');

const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors());

const database = {
    users: [
        {
            id: '123',
            name: 'Rose',
            email: 'rose@gmail.com',
            password: 'cookies',
            entries: '0',
            joined: new Date()
        },
        {
            id: '124',
            name: 'Adri',
            email: 'adri@gmail.com',
            password: 'cereales',
            entries: '0',
            joined: new Date()
        }
    ],
    login: [
        {
            id: '987',
            hash: '',
            email: 'rose@gmail.com'
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users)
})

app.post("/signin", (req,res) => {
    const {email, password} = req.body;
    if (email === database.users[0].email &&
        password === database.users[0].password) {
            res.json(database.users[0]);
        } else {
            res.status(400).json("impossible logging in")
        }
})

app.post("/register" , (req, res) => {
    const {email, name, password} = req.body;
    database.users.push({
            id: '125',
            name: name,
            email: email,
            entries: '0',
            joined: new Date()
    })
    res.json(database.users[database.users.length - 1])
})

app.get("/profile/:id", (req, res) => {
    const {id} = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return res.json(user)
        } 
    });
    if (!found) {
        return res.status(404).json("user not found");
    }
}) 

app.put("/image", (req, res) => {
    const {id} = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries ++;
            return res.json(user.entries);
        } 
    });
    if (!found) {
        return res.status(404).json("user not found")
    }
})

app.listen(3001, () => {
    console.log('app is running in port 3001')
})
