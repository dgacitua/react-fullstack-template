# React Fullstack Template

Created by Daniel Gacitua

This is a boilerplate template based on React, Express and Parcel for starting fullstack projects. It uses ECMAScript 6 standard for Javascript with class-oriented design.

This template uses the following technologies:
- JavaScript with ECMAScript 6 standard
- Babel 7.4.3
- Parcel 1.12.3
- Express 4.16.4
- Axios 0.18.0
- React 16.8.6
- Bootstrap 4.3.1
- Font Awesome 5

## Minimum requirements

Installation steps described below are for Ubuntu 16.04:

- Node.js 8.x (or higher)

    ```
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    sudo apt-get install -y nodejs build-essential
    ```

## Install and usage instructions

- Download this template as ZIP (either from Releases or `master` branch)
- Enter to the template's directory and edit your project name, author and license in `package.json`
- Run `npm install` to install all NPM dependencies
- Run `npm run dev` to enable developer mode with browser live reload 
- Run `npm run build` to package your project as a static web application (the result will be available on `build` folder on project's root directory)
- Run `npm run start` to start the application in production (as a daemon)
- Run `npm run stop` to stop the application in production
- To install a production NPM package, run `npm install --save <mypackage>`
- To install a development NPM package, run `npm install --save-dev <mypackage>`

## License

MIT