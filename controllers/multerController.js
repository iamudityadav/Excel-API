import multer from "multer";
var fileName = "";
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "files");
    },
    filename: (req, file, cb) => {
        fileName = file.originalname;
        cb(null, fileName);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        cb(null, true);
    } else {
        cb(null.false);
    }
};

const uploadFile = multer({ storage: fileStorage, fileFilter: fileFilter }).single("excelSheet");
const resData = (req, res, next) => {
    req.fileName = fileName;
    if (!req.file) {
        res.status(422).json({ message: "File not found." });
    } else {
        res.status(201).json({ message: "File uploaded successfully.", data: req.file });
    }
    next();
};

export { uploadFile, resData };