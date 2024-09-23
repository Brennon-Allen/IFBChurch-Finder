const express = require('express') //import express
const churchRouter = express.Router() //create router for inventory
const Church = require('../models/church.js') //import inventory from mongoose model

/** GET ALL Request **/
churchRouter.get("/", async (req, res, next) => {
    try {
        const foundChurches = await Church.find()
        res.status(200).send(foundChurches)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})
/** End of GET ALL Request **/

/** GET ONE Request **/
churchRouter.get("/:churchId", async (req, res, next) => {
    try {
        const churchId = req.params.churchId
        const foundChurch = await Church.findById(churchId)
        res.status(200).send(foundChurch)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})
/** End of GET ONE Request **/

/** POST Request **/
churchRouter.post("/", async (req, res, next) => {

    const { name, pastor, phone, address } = req.body;

    try {
        const newChurch = new Church({ name, pastor, phone, address })
        const savedChurch = await newChurch.save()
        res.status(200).send(`Successfully added ${savedChurch.name}.`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})
/** End of POST Request **/

/** DELETE Request **/
churchRouter.delete("/:churchId", async (req, res, next) => {
    try {
        const churchId = req.params.churchId
        const deletedChurch = await Church.findByIdAndDelete(churchId)
        res.status(200).send(`Successfully removed ${deletedChurch.name}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})
/** End of DELETE Request **/

/** PUT Request **/
churchRouter.put("/:churchId", async (req, res, next) => {
    try {
        const churchId = req.params.churchId
        const updatedChurch = await Church.findByIdAndUpdate(churchId, req.body)
        res.status(200).send(`Product updated. ${updatedChurch}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})
/** End of PUT Request **/

module.exports = churchRouter //export churchRouter