import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";


// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({path: ".env.example"});

// Create Express server
const app = express();


// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(
    express.static(path.join(__dirname, "../client/build"), {maxAge: 31557600000})
);

app.get("/some", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

export default app;
