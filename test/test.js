var assert = require('assert')
  , path = require('path')
  , endwith = require('..');

var root = path.dirname(__filename);

describe('endwith', function(){

  it('should return false', function(done){
    endwith(path.join(root, 'trace_375.csv'), '\n', function(err, ok){
      if(err) throw err;
      assert(!ok);
      done();
    });
  });

  it('should return true', function(done){
    endwith(path.join(root, 'trace_375.csv'), '0.581972,0.1,-5', function(err, ok){
      if(err) throw err;
      assert(ok);
      done();
    });
  });

});
