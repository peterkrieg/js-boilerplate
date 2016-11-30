# Javascript Boilerplate

My own JS boilerplate.  Started with create-react-app, decided I only needed pieces of the project.

## Desired Features

* Babel ES6+/JSX transpiling
* For react, need a module bundler, so webpack, gulp no longer necessary
* Hot module reloading (for CSS/all components)
* 


#### Preferences

* Use `.babelrc` file instead of inside `package.json`.  







## Running


* `npm install`
* `npm start`
* runs on port 3000 by default.  Can change by setting env variable `PORT` (can be done in `.env` file, or just `export PORT=4000` in CLI to change to 4000, for example)




## Production Build

Run `npm build` to create a distro folder and a bundle.js file.



#### Influences

This project influenced by `create-react-app`, `react-boilerplate`, Wes Bos' courses, and Cory House's JavaScript environment setup on Pluralsight.  





#####Things learned..

* can't use nodemon with hot module replacement:  https://github.com/glenjamin/webpack-hot-middleware/issues/21
* 
