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
 * Takes the bot's login token
 */
const token = require("./config/token.json").token;

/**
 * Imports various modules for message parsing
 */
const tokenize = require("./tokenize/tokenize.js");
const verify = require("./verify_msg/verify_msg.js");

eris.on("ready", () => {
    console.log(`Eris is currently being used on ${eris.channels.size} servers`);
})

eris.on("message", async msg => {
    // If the msg is not deemed a valid, then ignore it
    if (!verify.is_valid(msg)) return;

    const command = tokenize.tokenize(msg);

    /**
     * TODO: Write code which executres the command
     */
})

eris.login(token);