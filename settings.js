const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID,
    PREFIX: process.env.PREFIX || '.',
    FOOTER: process.env.FOOTER || "*© QUEEN LIHINI-MD ♡*",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/wrjNLcWd/2559.jpg",
HEART_REACT: process.env.HEART_REACT || 'false',
AUTO_REACT: process.env.AUTO_REACT || 'false',
WELCOME: process.env.WELCOME || 'false',
    SUDO: process.env.SUDO === undefined ? '94701532320' : process.env.SUDO,
 AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ? "true" : process.env.AUTO_READ_STATUS,
    MODE: process.env.MODE === undefined ? "public" : process.env.MODE,
    ANTI_BAD: process.env.ANTI_BAD === undefined ? "false" : process.env.ANTI_BAD,
    ANTI_LINK: process.env.ANTI_LINK === undefined ? "false" : process.env.ANTI_LINK,
    ANTI_CALL: process.env.ANTI_CALL === undefined ? "false" : process.env.ANTI_CALL,
    ANTI_DELETE: process.env.ANTI_DELETE === undefined ? "false" : process.env.ANTI_DELETE,
    ANTI_BOT: process.env.ANTI_BOT === undefined ? "false" : process.env.ANTI_BOT,
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? "false" : process.env.AUTO_VOICE,
AUTO_STICKER: process.env.AUTO_STICKER === undefined ? "false" : process.env.AUTO_STICKER,
AUTO_REPLY: process.env.AUTO_REPLY === undefined ? "false" : process.env.AUTO_REPLY,
    READ_CMD: process.env.READ_CMD === undefined ? "false" : process.env.READ_CMD,
    RECORDING: process.env.RECORDING === undefined ? "false" : process.env.RECORDING,
    AI_CHAT: process.env.AI_CHAT === undefined ? "false" : process.env.AI_CHAT,
    AUTO_SONG_SENDER: process.env.AUTO_SONG_SENDER === undefined ? "false" : process.env.AUTO_SONG_SENDER
};
