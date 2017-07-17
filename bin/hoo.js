#!/usr/bin/env node

const { hoo } = require('../index')
const { prettyPrint, listPrint } = require('./printers')

const logger = out => printer => message => out(printer(message))
const log = logger(process.stdout.write.bind(process.stdout))(prettyPrint)

hoo(log, process.argv[2])
