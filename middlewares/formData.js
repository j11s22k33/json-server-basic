const multer = require('multer');
const fs = require("fs");
const path = require("path");

const getFilename = file => {
    let extname = path.extname(file.originalname);
    let basename = path.basename(file.originalname, extname);
    let date = Date.now();
    return basename + '-' + date + extname
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!fs.existsSync(process.env.UPLOAD_DIR)) {
            fs.mkdirSync(process.env.UPLOAD_DIR);
        }
        cb(null, process.env.UPLOAD_DIR) // 저장 디렉토리
    },
    filename: (req, file, cb) => {
        const filename = getFilename(file);
        cb(null, filename);

        req.body.image = filename
    }
});
const upload = multer({storage: storage});

module.exports = upload.single("image")