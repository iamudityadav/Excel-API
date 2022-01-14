import express from "express";

import { outbound, inbound } from "../controllers/mongodbController.js";

const router = express.Router();

router.post("/outbound", outbound);
router.post("/inbound", inbound);

export default router;