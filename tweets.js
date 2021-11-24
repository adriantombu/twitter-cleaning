const { twitter, treshold, sleep } = require('./config')

const main = async () => {
  const user = await twitter.currentUser()
  const tweets = await twitter.v2.userTimeline(user.id, { 'tweet.fields': 'created_at' })

  for await (const tweet of tweets) {
    if (Date.parse(tweet.created_at) <= treshold) {
      console.log(`Deleting tweet ${tweet.id}`)

      await twitter.v1.deleteTweet(tweet.id)
      await sleep()
    }
  }
}

main().catch((e) => console.log(e))
