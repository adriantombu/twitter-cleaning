const { twitter, treshold, sleep } = require('./config')
const { ApiResponseError } = require('twitter-api-v2')

const main = async () => {
  console.log(
    "⚠️  Starting April 2023, Twitter has restricted the access to the free tier and it's now impossible to delete your likes unless you pay for the Basic tier (at 100$ per month, it's probably not worth it)"
  )

  const user = await twitter.v2.me()
  const likedTweets = await twitter.v2.userLikedTweets(user.data.id, { 'tweet.fields': 'created_at' })

  for await (const likedTweet of likedTweets) {
    try {
      if (Date.parse(likedTweet.created_at) <= treshold) {
        console.log(`Unliking tweet ${likedTweet.id}`)

        await twitter.v2.unlike(user.data.id, likedTweet.id)
      }
    } catch (error) {
      if (error instanceof ApiResponseError && error.rateLimitError && error.rateLimit) {
        console.log('rate limit hit, waiting for the timer reset (this can take up to 15 minutes)')
        await sleep(error.rateLimit.reset)
        continue
      }

      throw error
    }
  }
}

main().catch((e) => console.log(e))
