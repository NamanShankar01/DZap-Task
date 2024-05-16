import { Router, response } from "express";
import server from "../config.js";
import axios from "axios";

const currencyRouter = Router();

currencyRouter.get("/", async (req, res) => {
  try {
    let response = await server.get("/assets");
    let data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default currencyRouter;
