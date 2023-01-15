const axios = require("axios");
const express = require('express')
const bodyParser = require("body-parser");
const crudFunc = require("./utils/crudFunc")
const ejs = require("ejs");
const path = require("path");

const app = express()

///Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");





///ROUTES
app.get("/", (req, res) => {
    crudFunc.getData("http://localhost:3000/users",(response)=>{
        const data = response.data;
        res.render("index",{data: {data}});
    });

app.post("/", (req, res)=>{
  let user ={
    name: req.body.userName,
    list: [
      {
      name: req.body.nrOneTwist,
      score: 3,
      },
      {
      name: req.body.nrTwoTwist,
      score: 2,
      },
      {
      name: req.body.nrThreeTwist,
      score: 1,
      }
    ]
  }

  crudFunc.postData("http://localhost:3000/users", user);
  res.redirect('/');

})
    
})

app.listen(3001)