Apple Pay
====================

###Install and Build

```bash
- npm install
```
```bash
- bower install
```

### Grunt Build task

To build the app (create the '/build' folder with content) you need to run the following command:

```bash
grunt build
```

###Grunt "Serve" Task

To serve the project (accessing it through http://localhost:8080 to test it), you need to run the following command:
```bash
grunt
```

Note: the `/build` folder is not going to be generated or updated. After work with this server, you need to run `grunt build` manually to update the `/build` folder with the latest changes.

###Deploying Firebase APP

##First Time Installation

You should have Node.js installed (you do not need to run Node, just have it installed)
To install the Firebase Command Line Tool run

```bash
npm install -g firebase-tools
```

##To update previously installed Firebase Tools
```bash
Run npm update -g firebase-tools
```
##Deploy your Website

- cd into your website directory
- if firebase.json is not in the root folder run
```bash
firebase init
```
- To deploy your website in (<YOUR-FIREBASE-APP>.firebaseapp.com ) run:
```bash
Run firebase deploy
```
- To get the project url run
```bash
firebase open
```