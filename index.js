import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./route.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use("/api/products", route);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.log(err);
	});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
