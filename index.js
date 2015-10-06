var path = require('path')

framework.$inject = ['config.files']
module.exports = {
  'framework:chai-dom': ['factory', function(files) {
    files.unshift({
      pattern: path.dirname(require.resolve('chai-dom')) + '/chai-dom.js',
      included: true,
      served: true,
      watched: false
    })
  }]
}
