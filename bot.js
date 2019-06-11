const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("575340261551505443")
setInterval(function() {
channel.send(`NUDES NUDES NUDES`);
}, 30)
})

client.login(process.env.BOT_TOKEN);