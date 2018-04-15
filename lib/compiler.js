module.exports = function() {

  let stew = require('broccoli-stew');
  let remark = require('./remark');

  return class Compiler {
    constructor() {
      this.name = 'markdown-template-compiler';
      this.ext = [ 'md', 'markdown' ];
    }
    toTree(tree) {
      let compiled = stew.map(tree, `**/*.{${this.ext}}`, string => remark(string));
      return stew.rename(compiled, '.md', '.hbs');
    }
  };
}();
