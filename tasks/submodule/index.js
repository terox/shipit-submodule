var registerTask = require('../../lib/register-task');

/**
 *
 *
 */

module.exports = function (gruntOrShipit) {
  require('./submodule')(gruntOrShipit);

  registerTask(gruntOrShipit, 'submodule', [
    'submodule:update'
  ]);

  gruntOrShipit.on('fetched', function () {
    gruntOrShipit.start('submodule');
  });
};
