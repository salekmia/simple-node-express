const express = require('express');

const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello Salek Mia, Ki obosta? valo hoye gece.');
})

const users = [
    {
        id: 0,
        name: 'Sarmin',
        email: 'sarmin@gmail.com',
        phone: 8484848
    },
    {
        id: 1,
        name: 'Sabana',
        email: 'sabana@gmail.com',
        phone: 8484848
    },
    {
        id: 2,
        name: 'Sabnur',
        email: 'abnur@gmail.com',
        phone: 8484848
    },
    {
        id: 3,
        name: 'Srabonti',
        email: 'srabonti@gmail.com',
        phone: 8484848
    }
]

app.get('/users', (req, res) => {
    const search = req.query.search
    if(search) {
        const newUsers = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(newUsers)
    }else{
        res.send(users)
    }
})

// post METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length
    users.push(newUser)
    console.log('hitting the post', req.body)
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('fazli is very very toock')
})

app.listen(port, () =>{
    console.log('our port is', {port})
})