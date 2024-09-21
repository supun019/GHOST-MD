const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Ru9jUSgJ#a7DdhG1zYemVENX0s3cR2IbZ6WzUZobw767M1hisn6k",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/397000a07a1deb7fad9c2.jpg",
MONGODB: process.env.MONGODB || "",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
