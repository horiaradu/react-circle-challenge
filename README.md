Very simple application to see how React behaves under serios load: drawing a circle and/or a disc
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setup

`yarn install` to install dependencies

`yarn start` to start the project locally

`yarn run build` to build the production version of the application

## Github pages

You can find the app [here](https://horiaradu.github.io/react-circle-challenge).

## Prelimnary findings:

### Disc with 900K components 
- didn't have patience for it... :P
### Disc with 180K components
- it drew the disc but the page wasn't responding, the button couldn't be clicked
### Disc with 18K components
- it drew the disc
- you could click the button to transform the disc, but it wasn't smooth
- resource consumption (Chrome Task Manager) 300 MB, 60 CPU
### Circle with 3.6K components
- it drew the disc
- you could click the button to transform the disc, and it was smooth
- resource consumption (Chrome Task Manager) 3137MB, 6.5 CPU
