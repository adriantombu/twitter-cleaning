# Delete your old tweets & likes automatically

Unless you're some fancy public figure, no one is interested in what you wrote or liked two weeks ago (not even you) so why would you ever need to keep thousand of old data on Twitter ?

Thanks to the witchcraft of Github Actions [Cron](https://en.wikipedia.org/wiki/Cron), you'll get to keep a nice and tidy Twitter account without even having to think about it. Pretty nice, hey ?

## How to use it

- Get a Twitter API token on [https://developer.twitter.com](https://developer.twitter.com) and save your credentials
- Fork this repository
- Add the environment variables in your forked repository (`Secrets` page in the `Settings` tab) (look at the `.env.example` file to find the proper naming)
- Enjoy an automated cleaning of your oldest tweets and likes every 24 hours

## Configuration

Set `DELETE_AFTER_DAYS` parameter to define the number of days ("older than") after which the twitter cleaning will be performed - tweet deletion and likes deletion. The default value of the `DELETE_AFTER_DAYS` parameter is 14 days.

## Important note

If you have many thousand tweets and likes, they will not be deleted on the first pass because of the Twitter API rate limiting. I don't want to abuse Github Actions and the Twitter API so it will stay as is. It will just take some days to clean up everything the first time you use this script.

## Disclaimer

This script is destructive and **will delete all your tweets and likes older than 14 days** (default value). Please make a full backup of your data before running it if you think you will ever need this data someday. I didn't because I don't care, but you're not me (it's for the best believe me).

*[Thanks to JetBrains](https://www.jetbrains.com/?from=Amazon%20Alternatives) that supports my modest OSS contributions.*
