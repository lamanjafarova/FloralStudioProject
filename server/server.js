const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { Schema } = mongoose
const port = 8080;
app.use(cors())
app.use(bodyParser.json())
const FlowersSchema = new Schema({
    imgUrl: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
})
const Flowers = mongoose.model("flower", FlowersSchema)
app.get("/flower", (req, res) => {
    Flowers.find({}, (err, docs) => {
        if(!err){
            res.send(docs)
        } else{
            res.status(500).json({ message: "Successfully"})
        }
    })
})

app.get("/flower/:id", (req, res) => {
    const { id } = req.params
    Flowers.findById(id, (err, docs) => {
        if(!err) {
            res.send(docs)
        } else {
            res.status(500).json({message: "Not Found"})
        }
    })
}) 
app.delete("/flower/:id", (req, res) => {
    const { id } = req.params
    Flowers.findByIdAndDelete(id, (err, docs) => {
        if(!err) {
            res.send(docs)
        } else {
            res.status(500).json({message: "Not Found"})
        }
    })
}) 
app.post("/flower", (req, res) => {
    let newFlower = new Flowers({
        imgUrl: req.body.imgUrl,
        name: req.body.name,
        price: req.body.price,
    })
    newFlower.save()
    res.send({ message: "Flower Post"})
})

mongoose.connect(
    "mongodb+srv://lemanjaffar:lemanjaffar@cluster0.o26j4pn.mongodb.net/?retryWrites=true&w=majority",
    err => {
        if(!err){
            console.log("DB CONNECT");
            app.listen(port, () => {
                console.log(`http://localhost:${port}`);
            })
        }
    }
)