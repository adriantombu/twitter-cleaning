require('dotenv').config()
const { TwitterApi } = require('twitter-api-v2')
const dayjs = require('dayjs')

module.exports.twitter = new TwitterApi({
  appKey: process.env.TWITTER_KEY,
  appSecret: process.env.TWITTER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

module.exports.treshold = dayjs().subtract(process.env.DELETE_AFTER_DAYS || 14, 'day')

module.exports.sleep = () => new Promise((r) => setTimeout(r, Math.random() * (750 - 250 + 1) + 250))
