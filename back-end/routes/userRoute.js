const express = require("express");
const router = express.Router();

//authonthication  middleware
const authMiddleware= require('../middleware/authMiddleware')

// usercontrollers
const { register, login, checkUser } = require("../controller/userController");

// application.post("api/user/login",(req,res)=>{
//     res.send("login")
// })

// register rout
router.post("/register", register);

//login user
router.post("/login", login);

// check user
router.get("/check",authMiddleware, checkUser);

module.exports = router;
