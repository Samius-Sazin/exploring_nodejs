const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//Enable All CORS Requests
app.use(cors());

//use for parse
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Exploring Node Js");
})

const users = [
    { id: 0, name: "Sami", roll: "1230", age: "21", cgpa: "3.92" },
    { id: 1, name: "Samius", roll: "1231", age: "22", cgpa: "3.93" },
    { id: 2, name: "Sazin", roll: "1232", age: "20", cgpa: "3.94" },
    { id: 3, name: "Samin", roll: "1233", age: "21", cgpa: "3.95" },
    { id: 4, name: "Samiu", roll: "1234", age: "20", cgpa: "3.99" },
    { id: 5, name: "Samia", roll: "1235", age: "21", cgpa: "3.98" },
    { id: 6, name: "Samiul", roll: "1236", age: "22", cgpa: "3.96" },
    { id: 7, name: "Sam", roll: "1226", age: "20", cgpa: "4.00" },
]

//SHow all users, show searched users
app.get('/users', (req, res) => {
    const search = req.query.search;

    if(search){
        const searchedUsers = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchedUsers);
    } 
    else{
        res.send(users);
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    // res.send(JSON.stringify(newUser));
    res.json(newUser); 
})

app.get('/users/:id', (req, res) => {
    const index = req.params.id;
    const user = users[index];
    res.send(user);
})

app.listen(port, () => {
    console.log("PORT : ", port);
})