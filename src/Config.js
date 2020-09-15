//ENABLE REST API TO YOUR WOOCOMMERCE STORE AND PROVIDE THE INFOS
const rest_api_creds = {
  website : "https://dev.solidcube.gr/fashion",  // WEBSITE URL
  consumer_key: "",  // CONSUMER KEY
  consumer_secret: "",  // CONSUMER SECRET
}


//WP REST API TOKEN AND ENDPOINTS
export const token = "consumer_key="+rest_api_creds.consumer_key+"&consumer_secret="+rest_api_creds.consumer_secret;
export const productsEndPoint = rest_api_creds.website+"/wp-json/wc/v3/products";
export const topSellersEndPoint = rest_api_creds.website+"/wp-json/wc/v3/reports/top_sellers?"+ token;
export const salesEndPoint = rest_api_creds.website+"/wp-json/wc/v3/reports/sales?"+ token;
export const ordersEndPoint = rest_api_creds.website+"/wp-json/wc/v3/orders?"+ token;
export const ordersTotalsEndPoint = rest_api_creds.website+"/wp-json/wc/v3/reports/orders/totals?"+ token;

