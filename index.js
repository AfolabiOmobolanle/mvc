var express = require ("express");
var path = require("path");
var dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var app = express();

app.set("view engine","ejs");

// if you decide not to use the conventional way for your view engine;
// app.set("views", " ./views")


dotenv.config({path:"config.env"});
let PORT = process.env.PORT || 1980

app.use("/css",express.static(path.resolve(__dirname,"assets/css")));
app.use("/img",express.static(path.resolve(__dirname,"assets/img")));
app.use("/js",express.static(path.resolve(__dirname,"assets/js")));


app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({extended: true}));

// API
app.get("/",(req,res)=>{
    res.render("Hello i don render")
})

app.listen(PORT,()=>{
    console.log(`server is running on port  ${PORT}`);
})
