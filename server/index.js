import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


const CONNECTION_URL = "mongodb+srv://adguerrero1989:<PASSWORD>@cluster0.zujsw.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('sever is running on port:', PORT)))
    .catch((err) => console.error(err.message));

// mongoose.set('useFindAndModify', false);