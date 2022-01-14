import fs from "fs";

import ExcelOutbound from "../models/outboundDataModel.js";
import ExcelInbound from "../models/inboundDataModel.js";


const outbound = (req, res, next) => {
    const outboundData = JSON.parse(fs.readFileSync("JSONifiedExcel.json"))["CUS OUTBOUND RAW DATA"];
    ExcelOutbound.create(outboundData)
        .then(() => {
            res.status(201).json({ message: "MongoDB collection for outbound data created successfully." });
        })
        .catch(err => {
            console.log(err);
        });
};

const inbound = (req, res, next) => {
    const inboundData = JSON.parse(fs.readFileSync("JSONifiedExcel.json"))["CUS INBOUND RAW DATA"];
    ExcelInbound.create(inboundData)
        .then(() => {
            res.status(201).json({ message: "MongoDB collection for inbound data created successfully." });
        })
        .catch(err => {
            console.log(err);
        });
};
export { outbound, inbound };