# donor-form-api
donor-form-api is the api that helps save data entered in [donor-form-ui]("https://github.com/SwiftEsther/donor-form-ui/") in the db.

# Up and Running
To get this Node Js app running on your localhost:
- clone this repo
- cd into the cloned directory
- run `npm install` to get the required packages downloaded
- run `npm run dev` to see what it does
- run `rpm run test` to run the tests

For a more interesting experience, make sure to get [donor-form-ui]("https://github.com/SwiftEsther/donor-form-ui/") on your locals as well. Tweak, build and break to your satisfaction.

# Deployment
## Steps to deploy this app on Heroku:
Prerequisites:
- App cloned and running perfectly locally
- Tests passing
- [Heroku account]("https://signup.heroku.com"))
- A Mysql db -> the `.sql` file in the root fo the app directory has the necessary command for creating the database table

Inside the root of the app directory
- Run `heroku local` to run it locally, to be safe
- run `heroku login` and fill in credentials
- On successful login, run `git push heroku main` to deploy the `main` branch.
- Make sure your environment variables are set on Heroku. See below for details.
- We are live! Open the heroku link to your app (provided in the previous step) as soon as it is up with configurations set up.
Check that things work as they should.

Config setup on Heroku
- run the following to get the evironment variables set up on heroku
  - `heroku config:set DB_HOST = YOUR_DB_HOST`
  - `heroku config:set DB_NAME = YOUR_DB_NAME`
  - `heroku config:set DB_HOST = YOUR_DB_HOST`
  - `heroku config:set DB_USER = YOUR_DB_PASSWORD`

Kindly follow the steps carefully to ensure that your deployemnt is seamless. I also think [Herocu Documentation]("https://devcenter.heroku.com/categories/reference") would be pretty helpful if you run into any issues

# Feedback
I LOVE to give and receive feedback so please, go ahead...tell me what you think :). 
- [LinkedIn]("linkedin.com/in/esther-akinloose") 
- [Twitter]("https://twitter.com/eyiinjuu")
