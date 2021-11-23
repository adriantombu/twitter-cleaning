const dayjs = require('dayjs')
const { twitter, treshold, sleep } = require('./config')

const main = async () => {
  const user = await twitter.currentUser()
  const likedTweets = await twitter.v2.userLikedTweets(user.id, { 'tweet.fields': 'created_at' })

  for await (const likedTweet of likedTweets) {
    if (dayjs(likedTweet.created_at).isBefore(treshold)) {
      console.log(`Unliking tweet ${likedTweet.id}: ${likedTweet.text}`)

      await twitter.v2.unlike(user.id, likedTweet.id)
      await sleep()
    }
  }
}

main().catch((e) => console.log(e))
