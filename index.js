
const axios = require('axios');

async function mpesaPayment(customer,products,amount,callback_details) {

    headers = {
        "domain": process.env.CHPTER_CLIENT_DOMAIN,
        "Authorization":"Token "+ process.env.CHPTER_TOKEN
    };

    data =  {
        "customer_details" : customer,
        "products" : products,
        "amount" : amount,
        "callback_details" : callback_details
    };

    let res = await axios.post("https://chpter.co/api/payment/payment-initiate-callback/", data, { headers:  headers});

    return res.data;
}
 

async function cardPayment(customer,products,amount, card_details, callback_details) {
    headers = {
        "domain": process.env.CHPTER_CLIENT_DOMAIN,
        "Authorization":"Token "+ process.env.CHPTER_TOKEN
    };

    data =  {
        "customer_details" : customer,
        "products" : products,
        "amount" : amount,
        "card_details" : card_details,
        "callback_details" : callback_details
    };
    let res = await axios.post("https://chpter.co/api/payment/payment-initiate-callback/", data, { headers:  headers});

    return res.data;
  };
 
  function mobilePayout() {
    return "mobilePayout";
  };

  function domesticBanksPayout() {
  
    return "domesticBanksPayout";
  };

  module.exports = {
    mpesaPayment,
    cardPayment,
    mobilePayout,
    domesticBanksPayout,

 }