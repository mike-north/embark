/*eslint-env node*/
module.exports = {
  description: 'Setup for ember-embark',
  normalizeEntityName: function() {},
  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [{name: 'ember-cli-sass', target: '^6.0.0'}]
    });
  }
};
