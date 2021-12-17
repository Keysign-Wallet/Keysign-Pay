# Keysign-Pay
Keysignpay allows for easy tnbc transactions.

* No 3rd party middleman fees ever!
* Multiple payment options for tnbc
* Easy mobile access
* Multiple platform support
* Plug and play


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
