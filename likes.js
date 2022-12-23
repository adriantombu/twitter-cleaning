const { twitter, treshold, sleep } = require('./config')

const main = async () => {
  const user = await twitter.v2.me()
  const likedTweets = await twitter.v2.userLikedTweets(user.data.id, { 'tweet.fields': 'created_at' })

  for await (const likedTweet of likedTweets) {
    if (Date.parse(likedTweet.created_at) <= treshold) {
      console.log(`Unliking tweet ${likedTweet.id}`)

      await twitter.v2.unlike(user.data.id, likedTweet.id)
      await sleep()
    }
  }
}

main().catch((e) => console.log(e))
