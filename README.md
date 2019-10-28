# TastyBurger
Is a good app to learn the use of express-handlebars. I ask the user to add Hamburber names and people names, then to assign who is goint to eat the which hamberger. Each entered hamburger appears on one side of the screen, once the eater has been assign it is move to the other side of the screen. Is a good excersice to learn how to change where information it is display on an app and move it as the state of the information changes. 

## Getting Started
* Before starting with you need to install Nodejs and have basic understanding of it and npm (node package manager) this is the official line for the documentation [Nodejs Docs](https://nodejs.org/en/docs/), also know how to clone repositories from Github to your local machine [Git Reference](https://www.git-scm.com/docs). 


## Installing and Starting the app locally

Clone the app from this repository to you local drive of you PC (previously I recomended to have knowledge of how to clone repositories and where to find the information) and go to the root directory of the project, then run the command

```
npm install
```
This will take only a few minuts, the packages are small, and it should install node modules within the server directory. For the client side since the project express-handlebars, the npm install will install the package necesary for the handlebars views to run in the server and be render in the browser.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.

## Built With

### for the back end server and data persistance
* Visual Studio Code
* Nodejs 
* Express 
* MongoDb and Mongoose. 

### client side for the user interface.
* Passport, passport-local, google-passport 
* HTML, Javascript, CSS, espress-handlebars
* JQUERY and Bootstrap4

# Author
* Wilson Linares 
