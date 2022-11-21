
const CHPTER_TOKEN = process.env.CHPTER_TOKEN; 
const CHPTER_CLIENT_DOMAIN = process.env.CHPTER_CLIENT_DOMAIN; 
const PAYMENT_URL = "https://chpter.co/api/payment/payment-initiate-callback/";

module.exports = { PAYMENT_URL, CHPTER_TOKEN, CHPTER_CLIENT_DOMAIN }
