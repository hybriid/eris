/**
 * Author: md
 * Purpose: Primary purpose of the file is to break down 
 * the user's message into tokens
 */

tokenize_msg = (msg) => {
    /**
     * Tokenizes the message raw, returns tokens even 
     * with prefix
     */

    tokenized_raw = msg.split(" ");

    // Removes extra spaces from tokenized message
    // ie: !google  bing (notice the two spaces)
    trimmed_tokens = tokenized_raw.filter(token => token != "");

    return trimmed_tokens
}

tokenize = (msg) => {
    /**
     * Returns the tokens without the prefix
     */
    return tokenize_msg(msg).slice(1);
}



module.exports = {tokenize};