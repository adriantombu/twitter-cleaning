require('dotenv').config()
const { TwitterApi } = require('twitter-api-v2')

module.exports.twitter = new TwitterApi({
  appKey: process.env.TWITTER_KEY,
  appSecret: process.env.TWITTER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

module.exports.treshold = Date.now() - 86400000 * process.env.DELETE_AFTER_DAYS || 14

module.exports.sleep = (reset) => new Promise((r) => setTimeout(r, reset * 1000 - Date.now()))
