var fs = require('fs');

/**
 * from https://gist.github.com/mathiasbynens/1010324 
 * This function will return the byte size of any UTF-8 string you
 * pass to it.
 */

function byteCount(s) {
  return encodeURI(s).split(/%..|./).length - 1;
}


/**
 * str is an UTF-8 string
 */ 
module.exports = function(filePath, str, callback){

  fs.stat(filePath, function(err, stats){
    if (err) return callback(err);

    var l = byteCount(str);

    if(l > stats.size){
      return callback(null, false);
    }

    var read = '';
    
    var s = fs.createReadStream(filePath, {
      encoding: 'utf8',
      start: stats.size-l,
      end: stats.size
    })
      .on('data', function(data){
        read += data;
      })
      .on('error', function(err){
        s.destroy();
        callback(err);
      })
      .on('end', function(){
        callback(null, (read === str));
      });    
  });

};
