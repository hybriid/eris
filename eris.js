const Discord = require("discord.js");
const eris = new Discord.Client();

const token = require("./config/token.json").token;
const msg_config = require("./config/msg_config.json");

const parser = require("./parser.js");

eris.on("ready", () => {
    console.log(`Eris is currently being used on ${eris.channels.size} servers`);
})

eris.on("message", async message => {
    // Ignores messages from other bots -- prevents bot loops
    if (message.author.bot) return;

    // Ignores messages that do not have the predefined prefix
    if (message.content[0] != msg_config.prefix) return;


})

eris.login(token);