const { number, boolean } = require('yargs');
const { createFile, createFileAsync } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

const base = argv.b
const list = argv.l
const limit = argv.t

createFile(base, list, limit)
    .then(msg => console.log(msg))
    .catch(error => console.log(error))
