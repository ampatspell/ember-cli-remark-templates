module.exports = function() {

  let unified = require('unified');
  let markdown = require('remark-parse');
  let html = require('remark-html');
  let highlight = require('remark-highlight.js');
  let { highlighted, inline } = require('./escape-code');

  return string => new Promise(resolve => {
    unified()
      .use(markdown)
      .use(highlight)
      .use(highlighted)
      .use(inline)
      .use(html)
      .process(string, function (err, file) {
        if(err) {
          console.error(err.stack);
        }
        resolve(file.contents);
      });
  });
}();
