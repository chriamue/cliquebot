const config = require('./config')
const Telegraf = require('telegraf')
const bot = new Telegraf(config.bottoken, {username: config.botusername})
bot.start((ctx) => ctx.reply('Welcome!'))

const Nick = require('./plugin/nick')
var nickplugin = new Nick(bot);
nickplugin.init();

bot.startPolling()