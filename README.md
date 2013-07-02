fsendswith
=========

Check if a file ends with a given utf-8 string.


Install
=======

with npm do:

    npm install fsendswith


Usage
=====

    var endswith = require('fsendswith');

    endswith('myfile.csv', '\n', function(err, ok){
    
    });


Tests
=====

    npm test
