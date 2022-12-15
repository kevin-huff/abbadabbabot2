// Import the discord.js library
const Discord = require('discord.js');

// Create a new Discord client
const client = new Discord.Client();

// Configure the client with a token for your Discord bot
client.login('your-bot-token-here');

// When the client is ready, register the hello command
client.on('ready', () => {
  client.command('hello', message => {
    message.channel.send('Hello there!');
  });
});

