**Waiting for Twitter App Approval**

# Twitter Interface 

Use Twitter’s REST API to access your Twitter profile information and render it to a user. The page should automatically authenticate access to your Twitter profile. It should use this access to populate three columns on your page:

* Your 5 most recent tweets.
* Your 5 most recent friends.
* Your 5 most recent direct messages.

## Project Instructions 

**Set up a new Express project in the provided app.js file**

* You will need to create the following files:
* A `package.json` file that includes your project’s dependencies.
* A Jade/Pug template file to display tweets and messages
* A `config.js` file that will contain your application’s authentication code
* A `.gitignore` file to add your `config.js` and `node_modules/` folder to. This will prevent these files from being committed and pushed to github

* The following files are provided:
    * An `app.js` file where you will set up your Express app and write your API calls
    * An `index.html` file that provides an example of what the finished project should look like, and some CSS and image files to use with your Jade/Pug template

**Create a new Twitter application**

* This will generate the keys and access tokens you need to authenticate your application so it can communicate with the Twitter API. You can find a link to a tutorial on how to do this in the project resources. Please note that while the tutorial says to create a Twitter dev account at `dev.twitter.com`, the url to create a Twitter dev account is now `https://apps.twitter.com/`

**Use and interact with the Twitter API**

* To use and interact with the Twitter API, you’ll need to set up a way to give the Twitter API the set of keys and access tokens that were generated when you create your Twitter app. It’s a good idea to use an npm module to help you with this part. For this project, you’ll use an npm module called [Twit](https://www.npmjs.com/package/twit). You can find a link in the project resources. Be sure to look through the documentation and familiarize yourself with how it works.

* Create a file called `config.js`. In this file, you’ll assign an object literal to the module.exports object, as shown in the Twit documentation. The object literal should have the following properties with their corresponding values from your Twitter application account:
    * consumer_key
    * consumer_secret
    * access_token  
    * access_token_secret

* Import this `config.js` code into your `app.js` file to authenticate your application so you can request data from the Twitter API.

**Make a Pug/Jade template for the main page**

* The template should have spaces for:
    * your 5 most recent tweets
    * your 5 most recent friends
    * your 5 most recent direct messages

* It should also include your personal Twitter name and profile image at the top of the screen.

* Styling is not the important part of this project. Craft your template markup to take advantage of the CSS we’ve provided you. Knowing how to work with someone else’s styles is a very important skill as a full-stack developer. Pay attention to class names, inheritance, and so on. Try to avoid element types that are not used in the provided HTML and CSS files.

**Handle requests and routes using Node and Express**

* Using Node and Express, request the data you need from Twitter’s API, render it in your template, and send it to the client at the “/” route. Please avoid using Express generator to set up this project. It will be good practice to set up a simple Express app yourself!

**Each rendered result must include all of the information seen in the sample layout:**

* Tweets
    * message content
    * number of retweets
    * number of likes
    * date tweeted  

* Friends
    * profile image
    * real name
    * screen name

* Messages
    * message body
    * date the message was sent
    * time the message was sent

**NOTE:** Twitter API Update: The Twitter API now asks that API users no longer target direct_messages, but rather direct_messages/events/list. The problem is that this only targets DMs in the last thirty days. So if your user doesn't have 5 DMs in the last thirty days, and your app is expecting 5 DMs, then your app will throw an error, likely crash, and not load to the page. As a developer, the way to deal with this would be to use a conditional to check that the DMs exist before trying to doing something with them. If there are less than 5 DMs available, then all you can do is print what's available. And if you can figure out how to print a "Direct Message unavailable or does not exist" placeholder message in lieu of the missing DMs, then all the better.

**NOTE:** You don’t have to display direct messages as a back and forth conversation. Displaying only sent or received messages is fine.


## Extra Credit

**Post a New Tweet**

* Add a section to the bottom of your page that allows a user to post a new tweet. The new tweet should display without having to manually refresh the page.

**Error page**

* Add an error page to your application, so that if the user navigates to a non-existent route, the user will see a friendly message rendered, instead of the default error code.

**Custom background image**

* Include your personal background image from Twitter as a background for the page header. In the data, the property that stores this image is called profile_banner_url.

**Completed:** N/A    
**Grade:** N/A
