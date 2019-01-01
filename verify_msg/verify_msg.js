/**
 * Author: md
 * Purpose: Verifies the user's message to see if it
 * should be parsed and then tokenized
 */

const msg_prefix = require("../config/msg_prefix.json").prefix;

const is_author_human = (msg) => {
    return !msg.author.bot
}

const is_properly_prefixed = (msg) => {
    // console.log(`First char: ${string_msg}`);
    // console.log(`msg_prefix: ${msg_prefix}`);
    // console.log(`The equality ${string_msg[0] === msg_prefix}`)
    return msg.content.startsWith(msg_prefix);
}

const verify = (msg) => {
    /**
     * Returns true if the message should be
     * parsed
     */

    // All our functions from above.
    const constraints = [is_author_human, is_properly_prefixed];

    // Contains all the booleans returned from applying the functions above into msg.
    const fn_booleans = [];

    // Takes functions from constraints one by one and applies them to msg.
    // The resulting boolean is then pushed into fn_booleans.
    constraints.forEach(fn => {
        fn_boolean = fn(msg);
        fn_booleans.push(fn_boolean);
    });

    // If any of the functions in constraints returns false, then should_be_parsed becomes
    // false
    const should_be_parsed = !fn_booleans.some(bool => bool === false);

    return should_be_parsed;
}

module.exports = {verify};