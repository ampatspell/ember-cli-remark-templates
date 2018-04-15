module.exports = function() {

  let unified = require('unified');
  let markdown = require('remark-parse');
  let html = require('remark-html');
  let highlight = require('remark-highlight.js');
  let { highlighted, inline } = require('./escape-code');

  let stack = unified()
    .use(markdown)
    .use(highlight)
    .use(highlighted)
    .use(inline)
    .use(html);

  return string => stack.processSync(string).toString();
}();
