# Keysign-Pay

Keysignpay allows for easy tnbc transactions.

- No 3rd party middleman fees ever!
- Multiple payment options for tnbc
- Easy mobile access
- Multiple platform support
- Plug and play

## Typescript React Component

This directory features a react component with type declarations for the keysign sdk that allows people to set up a payment page for tnbc purchases.

For more details on the component, take a look at the [documentation](https://github.com/tomijaga/Keysign-Pay/tree/main/react/docs.md)

## Setup Project Environment (TSDX React)

This project uses [TSDX React](https://tsdx.io/) because it allows us to focus on developing and publishing our react component libraries while it takes care of all the configurations.
For more features of tsdx react check out their [user guide](https://github.com/jaredpalmer/tsdx/blob/master/templates/react/README.md)

TSDX scaffolds your new library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm i # or yarn to install dependencies
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```bash
cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, we use [Parcel's aliasing](https://parceljs.org/module_resolution.html#aliases).

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.


## Guide on how data is sent back and structured from the extension: [here](https://github.com/Keysign-Wallet/keysign/blob/master/DOCS.md#requesttransfer)

How you scan/verify for the transaction depends on the libary you are using.

What you should be looking for:
https://i.gyazo.com/99703bfd29ebb29752343c203abcfe4c.png

Scan the wallet for payment via api:
```
{bankurl}/bank_transactions?account_number={shopwallet}&format=json
This is a link that can call an API to check the shop’s wallet if transactions can be found.
```

Check for if transaction has been confirmed via api
```
{bankurl}/confirmation_blocks?block={Block}&format=json
You must pull the block from the transaction that is found in the chain
```
