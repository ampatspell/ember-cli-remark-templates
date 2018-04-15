module.exports = function() {

  let Filter = require('broccoli-filter');
  let remark = require('./remark');

  class Compiler extends Filter {
    constructor(tree, options) {
      super(tree, options);
    }
    get extensions() {
      return [ 'md', 'markdown' ];
    }
    get targetExtension() {
      return 'hbs';
    }
    processString(string, relativePath) {
      return remark(string, relativePath);
    }
  }

  return Compiler;
}();
