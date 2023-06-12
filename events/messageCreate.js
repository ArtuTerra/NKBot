const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    // Check if message author is a bot
    if (message.author.bot) return;
    const text = message.content.toLowerCase();
    // Checking the message and replying accordingly
    if (/\bhi\b/i.test(text)) {
      message.reply("Hello!");
    }

    if (/\bnkbot\b/i.test(text)) {
      message.reply(
        "Hey! Thats my name, i'm NKBot, nice to meet you! I'm very new so there isn't a lot i can do for now, so please bother <@156910590944739329> so he can add more cool stuff for me to do."
      );
    }

    if (/\bbanana\b/i.test(text)) {
      message.reply("🍌🍌🍌🍌🍌🍌");
    }

    const oi = /\boi\b/i;
    if (oi.test(text)) {
      message.reply("Oi, vai tomar no cu! ✨");
    }

    // const phantVand = /(?=.*phantom)(?=.*vandal).*(ou|or).*/i;
    // if (phantVand.test(text)) {
    //   message.reply(`**VANDAL ou PHANTOM?** `)
    // 	}
  },
};
