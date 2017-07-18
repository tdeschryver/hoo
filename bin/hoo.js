#!/usr/bin/env node

const { hoo } = require('../index')
const { prettyPrint, listPrint } = require('./printers')
const chalk = require('chalk')

const logCreator = out => printer => message => out(printer(message))

const logger = logCreator(process.stdout.write.bind(process.stdout))
const log = logger(prettyPrint)
const logError = logger(chalk.bold.red)

const username = process.argv[2]

if(!username) {
  logError('No username provided')
  return
}

hoo(log, username)
