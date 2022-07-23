require('colors');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'this arg is tha base for the multiplications'.blue
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: false,
        describe: 'show the output in console'.magenta
    }).option('t', {
        alias: 'termination',
        type: 'number',
        default: 10,
        demandOption: false,
        describe: 'final limit to multiplicate table'.blue
    }

    )
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'the base should be a number'.red
        }

        if (isNaN(argv.t)) {
            throw 'the limit should be a number'.red
        }

        if (argv.t < 1) {
            throw 'the limit should by greater than one'
        }

        return true
    }).argv;

module.exports = argv;