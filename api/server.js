import express from "express";
import mongoose from "mongoose";
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import cookieParser from "cookie-parser";



const port = process.env.APP_PORT;

const app = express();

mongoose.connect(process.env.DATABASE)
    .then(() =>
        console.log("Connectin established with Mongo DB"))
    .catch(error =>
        console.log("An error occured when connecting to the Mongo DB", error.message));
//Accept data from request body
app.use(express.json());

//For taking cookies
app.use(cookieParser())

//Definition of Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {

})
