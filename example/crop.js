var rub = require('../script.js');

rub('https://www.youtube.com/watch?v= ????')
    .crop('0:05', '0:25', './file.mp4')
    .then(function () {
        console.log("Done");
    }).catch(function (err) {
        console.log("err : ", err)
    });