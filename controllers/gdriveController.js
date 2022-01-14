import { google, jobs_v3 } from "googleapis";

import fs from "fs";
import path from "path";

import dotenv from "dotenv";
dotenv.config({});

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const drive = google.drive({
    version: "v3",
    auth: oAuth2Client
})

const filePath = path.join(__dirname, "..", "files", "myexcel.xlsx");

const saveToGdrive = async (req, res, next) => {
    try {
        const response = await drive.files.create({
            requestBody: {
                name: "myexcel.xlsx",
                mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            },
            media: {
                mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                body: fs.createReadStream(filePath)
            }
        })
        res.status(201).json({ message: "File uploaded to Google Drive successfully." });
    } catch (error) {
        console.log(error);
    }
};
export default saveToGdrive;