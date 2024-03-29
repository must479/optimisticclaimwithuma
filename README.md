# Optimistic Oracle dApp

## Required Environment Variables

- REACT_APP_ONBOARD_API_KEY

## Optional Environment Variables

At least one of these providers should be enabled in order for the app to collect any data. 

- REACT_APP_PROVIDER_URL_1=Ethereum Provider
- REACT_APP_PROVIDER_URL_5=Goerli Provider
- REACT_APP_PROVIDER_URL_10=Optimism Provider
- REACT_APP_PROVIDER_URL_82=Meter Provider
- REACT_APP_PROVIDER_URL_100=xDai Provider
- REACT_APP_PROVIDER_URL_137=Polygon Provider
- REACT_APP_PROVIDER_URL_288=Boba Provider
- REACT_APP_PROVIDER_URL_416=SX Provider
- REACT_APP_PROVIDER_URL_9001=Evmos Provider
- REACT_APP_PROVIDER_URL_42161=Arbitrum Provider
- REACT_APP_PROVIDER_URL_43114=Avalanche Provider
- REACT_APP_DEBUG=1 enable event state debugging output to console. Remove definition in production. Setting debug to 1 will also enable local hardhat testing with chain id 1337.
- REACT_APP_FORK_1=1 enabled mainnet fork through local hardhat or other node, hard coded to http://127.0.0.1:8545 and chain 1337


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
