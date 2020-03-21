const chalk = require('chalk');


function printTooltip(message){
    console.log (chalk.blue.bold(message));
 }

function printError(message){
    console.log (chalk.red.bgBlack(message));
}

function printMessage(message){
    console.log (chalk.hex('#00ffea')(message));
}

 module.exports.printTooltip = printTooltip;
 module.exports.printError = printError;
 module.exports.printMessage = printMessage;