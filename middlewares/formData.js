const multer = require('multer');
const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!fs.existsSync(process.env.UPLOAD_DIR)) {
            fs.mkdirSync(process.env.UPLOAD_DIR);
        }
        cb(null, process.env.UPLOAD_DIR) // 저장 디렉토리
    },
    filename: (req, file, cb) => {
        // cb(null, file.originalname); // 원본이름
        // cb(null, new Date().valueOf() + path.extname(file.originalname)); // 시스템시간으로 파일이름
        const filename = file.fieldname + '_' + Date.now() + '_' + file.originalname
        cb(null, filename); // image_1656350713522_ironman.png

        req.body.image = filename
    }
});
const upload = multer({storage: storage});

module.exports = upload.single("image")