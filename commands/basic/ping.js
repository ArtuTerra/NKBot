const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("salve")
    .setDescription("Replies with Salve!"),

  async execute(interaction) {
    await interaction.reply("Salve!");
  },
};
