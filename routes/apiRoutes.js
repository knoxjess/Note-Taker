const apiRoutes = require('express').Router()
const path = require('path')
const fs = require('fs')
const uniqid = require('uniqid')

apiRoutes.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err,data) => {
        if(err) {
            throw err
        }
        console.log(data)
        res.send(data)
    })
})

apiRoutes.post('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err,data) => {
        if(err) {
            throw err
        }
        console.log(data)
        let notes = JSON.parse(data)
        notes.push({...req.body, id: uniqid()})
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if(err) {
                throw err
            }
            res.json(req.body)
        })
    })

})

apiRoutes.delete('/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err,data) => {
        if(err) {
            throw err
        }
        console.log(data)
        let notes = JSON.parse(data)
        let filteredNotes = notes.filter(note => note.id != req.params.id)
        fs.writeFile('./db/db.json', JSON.stringify(filteredNotes), (err) => {
            if(err) {
                throw err
            }
            res.json(filteredNotes)
        })
    })

})

module.exports = apiRoutes