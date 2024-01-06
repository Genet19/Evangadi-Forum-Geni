require("dotenv").config();
const express = require("express");
const app = express();
const port = 5500;

const cors = require ('cors')

app. use (cors())

// dbConnection
const dbConnection = require("./db/dbConfig");

//user routes middleware file
const userRoutes = require("./routes/userRoute");

//question routes middleware file
const questionsRoutes = require("./routes/questionRoute");

// answer route middleware file
let answerRoutes = require("./routes/answerRoute");
// authentication middleware file
const authMiddleware = require("./middleware/authMiddleware");

// json midddleware to extract json data
app.use(express.json());

// user routes middleware
app.use("/api/user", userRoutes);

// questions routes middleware
app.use("/api/questions", authMiddleware, questionsRoutes);
// app.use("/api/questions", questionsRoutes);



// answer routes middleware??
app.use("/api/answers", authMiddleware, answerRoutes);

async function start() {
	try {
		const result = await dbConnection.execute("select'test'");
		await app.listen(port);
		console.log("database connection established");
		console.log(`listening on ${port}`);
	} catch (error) {
		console.log(error.message);
	}
}
start();
