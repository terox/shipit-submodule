var registerTask = require('../../lib/register-task');
var getShipit    = require('../../lib/get-shipit');
var chalk        = require('chalk');

module.exports = function (gruntOrShipit) {
  var shipit = getShipit(gruntOrShipit);

  registerTask(gruntOrShipit, 'submodule:update', function task() {

    if(!shipit.config.submodules) {
      shipit.log(chalk.red('Submodules download are disabled'));
      return;
    }

    shipit.log('Downloading submodules...');

    return shipit.local('git submodule update --init --recursive', {
      cwd: shipit.config.workspace
    }).then(function() {
      shipit.emit('submodule:update');
      shipit.log(chalk.green('Submodules downloaded'));
    });

  });

};
