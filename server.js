'use strict'

const lambdaPackage = require('./src/index.js')
const EXECUTION_INTERVAL = parseInt(process.env.EXECUTION_INTERVAL, 10)

const intervalHandle = setInterval(async () => {
  const event = {}
  const context = {}
  lambdaPackage.handler(event, context, (err) => {
    if (err) {
      clearInterval(intervalHandle)
      console.error(err)
      process.exit(1)
    }
  })
}, EXECUTION_INTERVAL)

process.on('SIGINT', () => {
  clearInterval(intervalHandle)
  process.exit(0)
})
