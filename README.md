# Delete your old tweets & likes automatically

Unless you're some fancy public figure, no one is interested in what you wrote or liked two weeks ago (not even you) so why would you ever need to keep thousands of old data on Twitter?

Thanks to the witchcraft of Github Actions [Cron](https://en.wikipedia.org/wiki/Cron), you'll get to keep a nice and tidy Twitter account without even having to think about it. Pretty nice, hey?

## How to use it

- Get a Twitter API token on [https://developer.twitter.com](https://developer.twitter.com) and save your credentials
- Fork this repository
- Add the environment variables in your forked repository (`Secrets` page in the `Settings` tab) (look at the `.env.example` file to find the proper naming)
- Enjoy an automated cleaning of your oldest tweets and likes every 24 hours

### Configuration

There are 5 parameters to define in the GitHub repository secrets.

#### Deletion days depth

Set `DELETE_AFTER_DAYS` parameter to define the number of days ("older than") after which the twitter cleaning will be performed - tweet deletion and likes deletion. The default value of the `DELETE_AFTER_DAYS` parameter is 14 days if you don't define it in the `Secrets`.

#### Twitter API

You can find a full explanation on how to retrieve the credentials on [TWITTER-CRENDENTIALS.md](./TWITTER-CRENDENTIALS.md).

### Run the actions

You have 2 options:
- Trigger manually the GitHub `Workflow` from the action tab.
- Set the CRON. By default, it performs the deletion every day.

## Important note

Users that have thousands of tweets and likes won't be able to clean them on the first pass because of the Twitter API rate limiting: to give tou an idea, we are allowed to delete 50 tweets every 15 minutes and do 50 unlikes every 15 minutes. It will just take a while to clean up everything depending on the amount of tweets and likes you have.

If you don't want to wait, you can pay for a service like [TweetDelete](https://tweetdelete.net/), [Tweet Deleter](https://tweetdeleter.com/) or [Tweet Eraser](https://www.tweeteraser.com/).

## Disclaimer

This script is destructive and **will delete all your tweets and likes older than 14 days** (default value). Please make a full backup of your data before running it if you think you will ever need this data someday. I didn't because I don't care, but you're not me (it's for the best believe me).

*[Thanks to JetBrains](https://www.jetbrains.com/?from=Amazon%20Alternatives) that supports my modest OSS contributions.*
