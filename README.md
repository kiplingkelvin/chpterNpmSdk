# chpter node
<p align="center"><a href="https://www.npmjs.com/package/@kipling/chpter" target="_blank"><img src="https://raw.githubusercontent.com/kiplingkelvin/ChpterNodeJsSample/master/nodejs_npm.png" width="400" alt="chpter Node Js"></a></p>

![npm](https://img.shields.io/npm/v/@kipling/chpter?color=%2389CFF0&style=flat-square)
![GitHub](https://img.shields.io/github/license/kiplingkelvin/chpterNpmSdk?style=flat-square)
![Scrutinizer code quality (GitHub/Bitbucket)](https://img.shields.io/scrutinizer/quality/g/kiplingkelvin/chpterNpmSdk?style=flat-square)

Removes all spaces from a string.

## Install

```
npm install @kipling/chpter
```
## NOTE
Add the following files to your .env (Ensure it is named as the examples bellow)
```env
CHPTER_CLIENT_DOMAIN=
CHPTER_TOKEN=

eg.

CHPTER_CLIENT_DOMAIN=chpter.co
CHPTER_TOKEN=chpter_pk_2b4037c1c8

```

## Usage
## Payments
### Mpesa Payment with STK Push 

```js
const chpter = require("@kipling/chpter");

customer = {
        "payment_method": "MPesa",
        "full_name": "John Doe",
        "location": "Nairobi",
        "phone_number": "254706347307",
        "email": "johndoe@mail.com"  };

products = [{
        "product_id": "08",
        "product_name": "HoodEez",
        "quantity": "1",
        "unit_price": "1" }];

amount = {
        "delivery_fee": "0",
        "discount_fee": "0",
        "total" : "1",
        "currency" : "kes"};

callback_details = {
        "transaction_reference":  "123456789123",
        "callback_url":  "https://eoeqwmbxsqqxo59.m.pipedream.net" };

var response = await chpter.mpesaPayment(customer,products,amount,callback_details);
```

### Card Payment

```js
const chpter = require("@kipling/chpter");

customer = {
        "payment_method": "MPesa",
        "full_name": "John Doe",
        "location": "Nairobi",
        "phone_number": "254706347307",
        "email": "johndoe@mail.com"  };

products = [{
        "product_id": "08",
        "product_name": "HoodEez",
        "quantity": "1",
        "unit_price": "1" }];

amount = {
        "card_number": "4242424242424242",
        "expiry_month": "08",
        "expiry_year": "2030",
        "cvc": "123"};

card_details = {
        "delivery_fee": "0",
        "discount_fee": "0",
        "total" : "1",
        "currency" : "kes"};

callback_details = {
        "transaction_reference":  "123456789123",
        "callback_url":  "https://eoeqwmbxsqqxo59.m.pipedream.net" };

var response = await chpter.cardPayment(customer,products,amount, card_details, callback_details);
```



## Resources

- [Node Js Chpter Implementation Sample Project](https://github.com/kiplingkelvin/ChpterNodeJsSample)

## Author

[@kiplingkelvin](https://www.github.com/kiplingkelvin)
