require('dotenv').config();
const finnhub = require('finnhub');

function getSymbolPrice(symbol){
    try {
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = 'cnenkv9r01qq13fnrho0cnenkv9r01qq13fnrhog';
        const finnhubClient = new finnhub.DefaultApi();
        finnhubClient.quote(symbol, (err, data, response) => {
            console.log(data);
        });
    } catch(error) {
        console.error('error', error);
    }
}
module.exports=getSymbolPrice