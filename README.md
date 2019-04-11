# Ling_D_chatApp
chat app last Trevor hw 

## Getting Started
Connect master branch with the heroku chat app and set automatic deploys. Set localhost:3030 port in app.js. 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

express

```
sudo npm i -g express-generator

express Ling_HerkouTest --hbs

```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

socket.io

```
npm install --save socket.io

```

var io = require('socket.io')();
const port = process.env.PORT || 3030;

const server = app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});

io.attach(server);


## Running the tests

npm start

### Break down into end to end tests

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
