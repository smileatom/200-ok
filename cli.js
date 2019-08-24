#!/usr/bin/env node
const argv = require("optimist")
    .usage('Usage: $0 [-p port] [-h]')
    .options({
      'p': {
        default: 2000
      },
    })
    .describe({
      'p': 'port',
      'h': 'help',
    })
    .boolean(['h'])
    .argv;

if (argv.h) {
  showHelp();
} else if (argv.p && argv.p !== true && !isNaN(argv.p)) {
  require("./index").start(argv.p);
} else {
  showHelp();
}

function showHelp() {
  require("optimist").showHelp();
}
