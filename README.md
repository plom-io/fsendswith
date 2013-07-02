fsendwith
=========

Check if a file ends with a given utf-8 string.


Install
=======

with npm do:

    npm install fsendwith


Usage
=====

    var endwith = require('fsendwith');

    endwith('myfile.csv', '\n', function(err, ok){
    
    });


Tests
=====

    npm test
