import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({});

import uploadRoutes from "./routes/upload.js";
import mongodbRoutes from "./routes/saveToMongodb.js";
import gdriveRoutes from "./routes/saveToGdrive.js";

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

app.use(uploadRoutes);
app.use("/save-to-mongodb", mongodbRoutes);
app.use(gdriveRoutes);

mongoose
    .connect("mongodb+srv://" + process.env.DB_USERNAME + ":" + process.env.DB_PW + "@cluster0.knkya.mongodb.net/excel-sheet")
    .then(result => {
        console.log("Connected");
        app.listen(8080);
    })
    .catch(err => {
        console.log(err);
    });