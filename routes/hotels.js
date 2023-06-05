import express from "express"
import Hotel from "../models/hotels.js";
import {createHotel} from "../Controllers/hotels.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE

router.put("/:id", async (req,res) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedHotel) ;
    } catch (err){
        res.status(500).json(err)
    }
});

//DELETE

router.delete("/:id", async (req,res) => {

    try {
        await Hotel.findByIdAndDelete (req.params.id);
        res.status(200).json("Hotel has been deleted") ;
    } catch (err){
        res.status(500).json(err)
    }
});

//GET


router.get("/:id", async (req,res) => {

    try {
        const hotel = await Hotel.findById
        (req.params.id);
        res.status(200).json(hotel) ;
    } catch (err){
        res.status(500).json(err)
    }
});

//GET ALL

router.get("/", async (req,res, next) => {

    const failed = true;

    if (failed) return next(createError(401, "You are not authenticated"));

    try {
        const hotels = await Hotel.findById("asdfg");
        res.status(200).json(hotels);
    } catch (err) {
        next (err)
    }
});

export default router;