"use strict";
import excelToJson from "convert-excel-to-json";
import fs from "fs";

const excelToJSON = (req, res, next) => {
    const result = excelToJson({
        source: fs.readFileSync("files/" + req.fileName),
        header: {
            rows: 1,
        },
        columnToKey: {
            "*": "{{columnHeader}}",
        },
    });
    fs.writeFileSync("JSONifiedExcel.json", JSON.stringify(result));
};
export default excelToJSON;