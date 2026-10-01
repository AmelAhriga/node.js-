import express from "express";
import { list, get, create } from "../../../controllers/api/v1/messages.js";

const app = express.Router();

app.get("/:id", get);

app.get("/", list);

app.post("/", create);

export default app;
