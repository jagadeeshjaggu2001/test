const express = require("express");
const {json,urlencoded} = require("express");
const path = require("path");

const ejs = require("ejs");

const app = express();
app.use(json());
app.use(urlencoded({extended:false}));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,"public")))

app.get("/", (req,res) => {
    res.render("index");
})

app.listen(3000,() => "server running at port 3000");