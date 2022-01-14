import express from "express";

import { uploadFile, resData } from "../controllers/multerController.js";
import excelToJSON from "../controllers/excelToJSON.js";

const router = express.Router();

router.post("/upload-file", uploadFile, resData, excelToJSON);

export default router;