import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
.options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'The base for the multiplication table'
})
.options('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'The limit for the multiplication table'
})
.options('s', {
    alias: 'start',
    type: 'number',
    default: 1,
    describe: 'The start for the multiplication table'
})
.options('v', {
    alias: 'view',
    type: 'boolean',
    default: false,
    describe: 'View the multiplication table in the console'
})
.options('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication_table',
    describe: 'The name of the file'
})
.options('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'The destination path of the file'
})
.check((argv, options) => {
    if (argv.b < 1) throw 'Error: The base must be greater than 0';
    if (argv.l < 1) throw 'Error: The limit must be greater than 0';
    if (argv.s < 1) throw 'Error: The start must be greater than 0';
    if (argv.l < argv.s) throw 'Error: The limit must be greater than the start';
    return true;
})
.parseSync();