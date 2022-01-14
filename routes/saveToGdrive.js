import express from "express";

import saveToGdrive from "../controllers/gdriveController.js";

const router = express.Router();

router.post("/save-to-gdrive", saveToGdrive);

export default router;