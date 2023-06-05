import express from  "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "../Booking App_Practice/routes/auth.js"
import hotelsRoute from "../Booking App_Practice/routes/hotels.js"
import roomsRoute from "../Booking App_Practice/routes/rooms.js"
import usersRoute from "../Booking App_Practice/routes/users.js"


const app = express()
dotenv.config()

const connect = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected!")
})


//middleware


app.use(express.json());

app.use("/auth", authRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);
app.use("/users", usersRoute);


app.use((err,req,res,next) => {
   return res.status(500).json("Hello error from handler!")
})


app.listen(8000, ()=> {
    connect()
    console.log("connected to backend.");
});


