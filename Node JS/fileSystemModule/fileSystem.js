var _fileSystem = require('fs');

var _prompt = require('prompt');
_prompt.start();

_prompt.get([{
  message : 'Give me the README.md container info',
  name: 'container'
}], function(_errorPrompt, _result) {
  _fileSystem.writeFile('README.md', _result.container, function(_errorPrompt) {
    if(_errorPrompt) {
      throw _errorPrompt;
    } else {
      console.log('File created!!!');

      _fileSystem.readFile('README.md', 'utf-8', function(_errorFileSystem, _data) {
        if(_errorFileSystem) {
          throw _errorFileSystem;
        } else {
            console.log(_data);
        }
      })
    }
  })
});
