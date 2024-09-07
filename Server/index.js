const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://sunil:sunil@cluster0.19jafnq.mongodb.net/')

app.get('/get',(req, res) => {
    TodoModel.find()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err.message }))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err.message }))
})
app.listen(3001, () => {
    console.log("Server is Running at port 3001")
})