# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
All the boorish stuffs can be found in anyother React 

## Things to keep in mind

By the time I decided to update this project, there was an error regarding mini-css-extract that led to build time fails. 
There was an update to mini-css-extract-plugin in version 2.5.0,
to override that 
add the following code to package.json
 "overrides": {
    "mini-css-extract-plugin": "2.4.5"
  }
and then for your npm version
npm i -D --save-exact mini-css-extract-plugin@2.4.5

(.....The -D flag is the shortcut for: --save-dev. Source: https://docs.npmjs.com/cli/install

-D, --save-dev: Package will appear in your devDependencies....)

## To make tailwind work
Uninstall tailwind alongwith autoprefixer and postcss and then install using official guide.
Incase Tailwind gets updated, Uninstall the previous version and carefully follow the official docs to install 