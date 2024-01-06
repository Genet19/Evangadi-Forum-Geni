const express = require("express");
const router = express.Router();
//authonthication  middleware
// const authMiddleware = require("../middleware/authMiddleware");


// router.get("/all-questions", (req, res) => {
// 	res.send("all questions");
// });
const {
    
	allQuestions,
	singleQuestion,
	questionPost,
} = require("../controller/questionController");
// all question rout
router.get("/all-questions", allQuestions);
// single question rout
router.get("/:questionid", singleQuestion);
// question post route
router.post("/post-question", questionPost);

module.exports = router;
