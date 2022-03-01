 const {Router} = require('express');
 const multer = require('multer');
 const router = Router();



 function filename(req,file, callback) 
 {
    callback(null,file.originalname);
 }


 const storage = multer.diskStorage({destination: 'api/uploads', filename: filename});




 function fileFilter ( req,file,callback){
     if(file.mimetype !=='image/png' ) {
        request.fileValidationError = 'Wrong file type';
        callback(null,false,new Error('Wrong file type'));
     }else{
         callback(null,true);
     }
 }







 const upload = multer({fileFilter: fileFilter(), storage: storage});




 module.exports = router;