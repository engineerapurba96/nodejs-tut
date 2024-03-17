const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");
//const Jwt = require('jsonwebtoken');
const jwtKey = "e-com";
const app = express();

app.use(express.json());
app.use(cors());
app.post("/register", async (req, resp) => {
  let user = await new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
  console.log(req.body);
});

// app.post("/register", async (req, resp) => {
//     let user = new User(req.body);
//     let result = await user.save();
//     result = result.toObject();
//     delete result.password
//     Jwt.sign({result}, jwtKey, {expiresIn:"2h"},(err,token)=>{
//         if(err){
//             resp.send("Something went wrong")
//         }
//         resp.send({result,auth:token})
//     })
// })
app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({result: "No user Found"});
    }
  } else {
    resp.send({result: "No user Found"});
  }
});

app.listen(5000);
