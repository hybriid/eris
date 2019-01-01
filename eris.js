/**
 * Author: md, Steve
 * Purpose: Primary purpose is to be the file from which the
 * bot is initialized
 */

/**
 * Initializes the discord client
 */
const Discord = require("discord.js");
const eris = new Discord.Client();

/**
 * Initializes various configuration options from the config
 * file
 */
const token = require("./config/token.json").token;

/**
 * Imports various models for message parsing
 */
const tokenize = require("./tokenize/tokenize.js");
const verify = require("./verify_msg/verify_msg.js");

eris.on("ready", () => {
    console.log(`Eris is currently being used on ${eris.channels.size} servers`);
})

eris.on("message", async message => {
    // // Ignores messages from other bots -- prevents bot loops
    // if (message.author.bot) return;

    // msg = message.content;

    // // Ignores messages that do not have the predefined prefix
    // if (msg[0] != msg_config.prefix) return;

    if (!verify.verify(message)) {
        console.log("bad");
    }
    else {
        console.log("good");
    }
    // command = tokenize.tokenize(msg);
})

eris.login(token);