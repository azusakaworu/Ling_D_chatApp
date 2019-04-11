# Ling_D_chatApp
Chat app -last Trevor hw.
To create an interactive chat application through using Node.js and socket.io. Design custom skin and add trasition effect.
Show the notification message when a user joins or leaves the chat, use colour to differentiate between user messages.

## Getting Started
1.Creat new app in https://dashboard.heroku.com/new-app
2.Set Node.js as the Buildpacks.
3.Connect master branch with the heroku chat app and set automatic deploys. 


### Prerequisites

express

```
sudo npm i -g express-generator

express Ling_D_ChatApp --hbs

```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

socket.io

```
npm install --save socket.io

```
Set localhost:3030 port in app.js. 
```
var io = require('socket.io')();
const port = process.env.PORT || 3030;
```

Create server variable for socket.io to use
```
const server = app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});

io.attach(server);
```

change package.json setting 
```
 "main": "app.js",
  "scripts": {
    "start": "node app"
  },
  
```


## Running the tests

npm start

### Break down into end to end tests
Ctrl+C 

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```

```

## Deployment

https://www.heroku.com/home

## Built With

* [Vue](https://vuejs.org/v2/guide/) - The Front-end web framework used
* [Socket.IO](https://socket.io/) - Dependency Management
* [Sass](https://sass-lang.com/) - Used to generate CSS 

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

+ node@10.11.0
+ express@4.16.0
+ socket.io@2.2.0

## Authors

* **Ling Ding** - *Developer & Designer* -


## License

This project is licensed under the MIT License 

## Acknowledgments

* https://vuejs.org/v2/guide/transitions.html
* https://socket.io/
* https://stackoverflow.com/questions/16156594/how-to-change-border-color-of-textarea-on-focus
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars
