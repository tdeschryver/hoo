#!/usr/bin/env node

const { hoo } = require('../index')
const printers = require('./printers')
const chalk = require('chalk')
var argv = require('yargs')
  .usage('Usage: $0 username [options]')
  .example('$0 tdeschryver', 'Print out the GitHub\'s info of tdeschryver')
  .options({
    p: {
      alias: 'printer',
      describe: 'The printer that is being used',
      choices: ['pretty', 'list'],
      default: 'pretty',
    },
  })
  .version()
  .alias('v', 'version')
  .help('h')
  .alias('h', 'help')
  .argv

const logCreator = out => printer => message => out(printer(message))
const logger = logCreator(process.stdout.write.bind(process.stdout))
const log = logger(printers[argv.p])
const logError = logger(chalk.bold.red)

const username = argv._[0]
if (!username) {
  logError('No username provided')
  return
}

hoo(log, username)
