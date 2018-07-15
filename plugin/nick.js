// Constructor
function Nick(bot) {
    // always initialize all instance properties
    this.bot = bot;
}
// class methods
Nick.prototype.init = function () {
    this.bot.command('setnick', (ctx) => this.setNick(ctx))
    this.bot.command('nicks', (ctx) => this.getNicks(ctx))
    this.bot.command('nick', (ctx) => this.getNick(ctx))
};

Nick.prototype.getNick = function(ctx){
    ctx.reply(ctx.from.username)
}

Nick.prototype.getNicks = function(ctx){
    ctx.reply(ctx.from.username)
}

Nick.prototype.setNick = function(ctx){
    var param = ctx.message.text.split(' ')[1]
    ctx.reply(param)
    console.log(ctx.from)
}
// export the class
module.exports = Nick;