import express from "express";
import { Product } from "./model.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.post("/", async (req, res) => {
	try {
		const product = new Product(req.body);
		await product.save();
		res.status(201).json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
export default router;
