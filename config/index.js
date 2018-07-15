var mongoHost = process.env.MONGOHOST || 'localhost';
var cliqueBotDB = process.env.CLIQUEBOTDB || 'cliquebot';
var cliqueBotToken = process.env.CLIQUEBOT_TOKEN || '';
var cliqueBotUsername = process.env.CLIQUEBOT_USERNAME || 'cliquelanbot';
var watsonUsername = process.env.WATSON_USERNAME || "";
var watsonPassword = process.env.WATSON_PASSWORD || "";
var watsonWorkspaceId = process.env.WATSON_WORKSPACE || "";

module.exports = {
    mongourl: 'mongodb://' + mongoHost + '/' + cliqueBotDB,
    bottoken: cliqueBotToken,
    botusername: cliqueBotUsername,
    watsonusername: watsonUsername,
    watsonpassword: watsonPassword,
    watsonworkspace: watsonWorkspaceId,
};