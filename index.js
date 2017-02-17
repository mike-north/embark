/* eslint-env node */
'use strict';

var path = require('path');
var stew = require('broccoli-stew');
var Merge = require('broccoli-merge-trees');

/**
 * Lots of this is inspired by (and in some cases directly copied from)
 * https://github.com/ef4/ember-sass-bootstrap
*/

function bootstrapAssetPath(which) {
  var bootstrapPath = require.resolve('bootstrap');
  return path.join(path.dirname(bootstrapPath), '../..', which);
}

module.exports = {
  name: 'embark',
  treeForStyles: function(tree) {
    return new Merge([tree, stew.mv(bootstrapAssetPath('scss'), 'bootstrap')]);
  },
  // treeForPublic: function() {
  //   return stew.mv(bootstrapAssetPath('fonts'), 'fonts');
  // },
  treeForVendor: function(tree) {
    return stew.debug(
      new Merge([
        tree,
        stew.mv(path.join(path.dirname(require.resolve('jquery-sparkline'))), 'jquery-sparkline' ),
        stew.mv(bootstrapAssetPath('js/dist'), 'bootstrap')
      ]),
      { name: 'vennndor' }
    );
  },
  included: function(app) {
    while (app.app) {
      app = app.app;
    }

    var plugins = (app.options.bootstrap || {}).plugins;
    (plugins || ['collapse', 'dropdown', 'button', 'alert', 'util']).forEach(function(name) {
      app.import('vendor/bootstrap/' + name + '.js');
    });
    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import('vendor/jquery-sparkline/jquery.sparkline.js');
    }
    this._super.included.apply(this, arguments);
    
  }
};
