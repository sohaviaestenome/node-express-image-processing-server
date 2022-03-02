const path = require('path');
const {Worker, isMainThread} = require('worker_threads');



const imageProcessor = async (resolve,reject) => {
    if(isMainThread){

    }else{
        await reject(new Error("not on main thread"));
    }
    resolve();
}


module.exports = imageProcessor;
