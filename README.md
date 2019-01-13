This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### run the project
* making sure to install Node.js firstly.
* In the project directory, run `npm install` firstly, and then`yarn start` to run the app in development mode.

### folder structure
Basically, the main codes are in directory `/src`.
* `/src/components:` based on the design image, I tried to find something reusable and created some components, including the Button, Card and Nav

* `/src/images:` the image resources are in this folder, and depend on different devices, using different images, and the module [react-responsive](https://github.com/contra/react-responsive) can help me solve the problem.

* `/src/pages:` this folder includes the main page and other page. By default, we will see the main page, and for other URL, it will be redirect to the other page, thanks to the [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start).

* `/src/styles:` I was using [SASS](https://sass-lang.com/) as css preprocessor and [normalize.css](https://necolas.github.io/normalize.css/) to reset the css. In this folder, there are two files, `global.scss` and `variables.scss`. `global.scss` includes some common css for the project. And `variables.scss` includes all variables can be used in other places.

### other tech
* [font-awesome](https://scotch.io/tutorials/using-font-awesome-5-with-react): for mobile view icon



