'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },

    autoImport: {
      allowAppImports: ['components/dynamic/*'],
    },

    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
  });

  return app.toTree();
};
