# FCoder's Web FrontEnd
This project is made by using __[NodeJS](https://nodejs.org/en/)__ with __[ExpressJS](http://expressjs.com/)__ framework and __[PUG](https://pugjs.org/api/getting-started.html)__ template.
Make sure you have installed all the dependencies.

## Get strated
You need to clone the project, using the code below
```
git clone https://github.com/a10-01a/FCoder-FrontEnd
```

## Before you start
Before running server, you need to install all the dependencies
```
npm install
```
To start server
```
npm start
```

## Things needed to know
The app use __[pm2](https://pm2.keymetrics.io/docs/usage/quick-start/)__ as a live server so that you don't need to start server every time you make changes on the files.
To kill all of the __pm2__'s server, use the command
```
pm2 kill
```
or
```
pm2 kill [appId or appName]
```
