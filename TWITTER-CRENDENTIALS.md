# Generate your Twitter credentials for this app

- Create a [Twitter developer account](https://developer.twitter.com/en)
- Go to the [Project & Apps > Overview](https://developer.twitter.com/en/portal/projects-and-apps) page

## Create a project

- Click on the "Add Project" button
- Give a name to your project (e.g. "Twitter cleaning") and click "Next".
- On the next screen, select a use case and click "Next". I usually use the "Exploring the API" option.
- On the next screen, add a small project description (e.g. "A small app to delete my tweets and likes automatically") and click "Next" to finish the creation of your project.

## Create an app

- On the Projects & Apps > Overview page, click on "Add App". If you see a choice between "Add an existing App" and "Create new", click on "Create new"
- On the next screen, select the "Production" environement checked and click "Next"
- On the next screen, add a name to your app (e.g. "Twitter cleaning") and click "Next".
- On the next screen, save the "API Key" as `TWITTER_KEY` and "API Key Secret" as `TWITTER_SECRET` on the `.env` file or environment variable on GitHub. We don't need the Bearer Token so you can discard it.
- You can then click on the "App Settings" button to go to your app.

## Set read & write permissions

Once you're in the profile page of your app, we're gonna need to update the permissions of the app to allow read & write. Currently, it's a read only app, so we won't be able to delete any tweet or like.

- On the "User authentication settings", click on "Set up"
- On the "App permissions" section, select the "Read & write" option
- On the "Type of App" section, select "Native App"
- On the "App info section", fill the "Callback URI" & "Website URI" with any valid link (e.g. "https://twitter.com"). We won't need this but those fields are mandatory to be able to validate the form.
- Click "Save" and "Yes" on the popup to validate your choices.
- You can discard the next screen with the OAuth 2.0 Client ID & Client Secret (we won't need them) and click on "Done" and "Yes, I saved it".

## Generate Access Token and Secret

Once we're back on the profile page of the app, it's time to generate the Access Token & Secret (bear with me, we're almost done!).

- Click on the "Keys and Token" section under the title of your app
- On the "Authentication Tokens" section, click on the "Generate" button next to "Access Token and Secret"
- Once the popup has been opened, save the "Access Token" as `TWITTER_ACCESS_TOKEN_KEY` and "Access Token Secret" as `TWITTER_ACCESS_TOKEN_SECRET` on the `.env` file or environment variable on GitHub.
- Click on "Yes, I saved them" to close the popup
- Check that you can see "Created with Read and Write permissions" under the "Access token and Secret" section. If it's not the case, you probably forgot to set the permissions to "Read & write" earlier. You will need to update them and then regenerate the Access Token and Secret.

## I have a 401 Unauthorized error

This is probably due to a problem when you filled the .env or environment variables on GitHub. But fear not, it can usually be fixed by regenerating the credentials.

- Go back to your app and click on the "Keys and tokens sections".
- On the "Consumer keys" section, click on "Regenerate" next to API Key and Secret, then confirm with "Yes, regenerate".
- On the next screen, save the "API Key" as `TWITTER_KEY` and "API Key Secret" as `TWITTER_SECRET` on the `.env` file or environment variable on GitHub, then click on "Yes, I saved them".
- Next, we can also regenerate the Access Token and Secret (please see the "Generate Access Token and Secret" section above).
- You should be able to get rid of that pesky 401 Unauthorized error now!
