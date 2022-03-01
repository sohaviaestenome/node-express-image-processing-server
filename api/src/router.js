const {Router} = require('express');
const { append } = require('express/lib/response');
const multer = require('multer');



const router = Router();


function filename(req,file, callback) 
{
callback(null,file.originalname);
};


const storage = multer.diskStorage({
    destination: 'api/uploads/',
        filename
});

const fileFilter = (request, file, callback) => {
    if (file.mimetype !== 'image/png') {
      request.fileValidationError = 'Wrong file type';
      callback(null, false, new Error('Wrong file type'));
    } else {
      callback(null, true);
    }
  };

const upload = multer({
    fileFilter,
    storage
});


router.post('/upload', upload.single('photo'), async (request, response) => {
    if (request.fileValidationError){
        return response.status(400).json({error: request.fileValidationError});
    }
   
    return response.status(201).json({success: true});
  });
    


module.exports = router;