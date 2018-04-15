'use strict';

module.exports = {
  name: 'ember-cli-remark-templates',
  setupPreprocessorRegistry(type, registry) {
    let Compiler = require('./lib/compiler');
    registry.add('template', {
      name: 'ember-cli-remark-templates',
      ext: [ 'md', 'markdown' ],
      toTree: tree => new Compiler(tree)
    });
  }
};
