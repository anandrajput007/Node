var fs = require('fs');

fs.open('file.txt', 'r', function (err, handle) {
    if (err == null) {
        var f = handle;
        var b = new Buffer(10000);

        fs.read(f, b, 0, 10000, null, function (err, bytes_read) {
            console.log(b.toString("utf8", 0, bytes_read));
            fs.close(f);
        });
    }
    else{
        console.log("OH NO, Fail to Open file: " + err.code + " " + err.message);
    }
});