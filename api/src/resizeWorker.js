const gm = require('gm');

const {workerData, parentPort} = require('worker_threads');

gm(workerData.source).resize(100,100).write(workerData.destination, error => {
    if (error) console.log('aaw, shucks');
    parentPort.postMessage({resized:true});
});

