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
    return msg.content.startsWith(msg_prefix);
}

const verify = (msg, constraints) => {
    /**
     * Applies functions from constraints to msg
     * 
     * If any of the functions returns false, then the message
     * is not parsable
     */

    // Contains all the constraints that returned false with msg as the parameter
    const functions_returned_false = constraints.filter(fn => fn(msg) === false);

    // If any of the functions returned false, then length would be > 0
    // Therefore, msg broke one of our constrains and should not be parsed
    return functions_returned_false.length === 0;
}

const is_valid = (msg) => {
    /**
     * Returns true if the message is parsable
     */

    const constraints = [is_author_human, is_properly_prefixed]
    return verify(msg, constraints);
}

module.exports = {
    is_valid
};