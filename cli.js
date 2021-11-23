#!/usr/bin/env node
const argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: $0 [-p port] [--del 200] [--get 200] [--head 200] [--patch 200] [--post 200] [--put 200] ' +
        '[--content-type text/plain] [--response-body false] [--reflect-post false] [--reflect-put] false ' +
        '[--reflect-patch] false [--reflect-all] false [-h]')
    .option('p', {
      description: 'port',
      default: 2000
    }).option('del', {
      description: 'DELETE',
      default: 200
    }).option('get', {
      description: 'GET',
      default: 200
    }).option('head', {
      description: 'HEAD',
      default: 200
    }).option('patch', {
      description: 'PATCH',
      default: 200,
    }).option('post', {
      description: 'POST',
      default: 200,
    }).option('put', {
      description: 'PUT',
      default: 200,
    }).option('content-type', {
      description: 'Content-Type for responses',
      default: 'text/plain'
    }).option('response-body', {
      boolean: true,
      description: `{"status':"message"} response`,
      default: true
    }).option('reflect-post', {
      boolean: true,
      description: 'Reflect POST body',
      default: false
    }).option('reflect-put', {
      boolean: true,
      description: 'Reflect PUT body',
      default: false
    }).option('reflect-patch', {
      boolean: true,
      description: 'Reflect PATCH body',
      default: false
    }).option('reflect-all', {
      boolean: true,
      description: 'Reflect ALL bodies',
      default: false
    })
    .version(false)
    .help('h').argv;

if (argv.p && argv.p !== true && !isNaN(argv.p)) {
  require("./index").start(argv.p, argv);
}
