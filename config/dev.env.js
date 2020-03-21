'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //BASE_API: '"http://127.0.0.1:9092"'
  BASE_API: '"https://betaadminapi.iacecoach.cn/"'
  //BASE_API: '"http://120.27.63.9:8080"'
})
