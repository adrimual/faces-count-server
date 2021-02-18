const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : 'postgresql-parallel-77871',
    user : 'postgres',
    password : 'cereales',
    database : 'smartbrain'
  }
});

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => res.send('success'));
app.post("/signin", signin.handleSignIn(db, bcrypt))
app.post("/register" , register.handleRegister(db, bcrypt))
app.get("/profile/:id", profile.handleProfile (db)) 
app.put("/image", image.handleImage(db))
app.post("/imageurl", (req, res) =>  image.handleApiCall(req, res))

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running in port ${process.env.PORT}`)
})
