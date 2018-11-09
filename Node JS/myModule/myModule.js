var _prompt = require('prompt');

_prompt.start();

var _routine = function() {
  _prompt.get([{
      message : 'Tell me your name ',
      name : 'name'
    }, {
      message : 'Tell me your age ',
      name : 'age'
    }, {
      message : 'Tell me where you from ',
      name : 'from'
    }
  ], function(_err, _result) {
    if(_err) {
      throw _err;
    }

    console.log('OK... Welcome ' + _result.name + ', you have ' + _result.age + ' years old, and came from ' + _result.from + '.');
  });
};

exports.modules = _routine();
