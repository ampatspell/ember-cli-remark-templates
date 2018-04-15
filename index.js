'use strict';

module.exports = {
  name: 'ember-cli-remark-templates',
  isDevelopingAddon() {
    return true;
  },
  setupPreprocessorRegistry(type, registry) {
    if(type === 'parent') {
      let Compiler = require('./lib/compiler');
      registry.add('template', new Compiler());
    }
  }
};
