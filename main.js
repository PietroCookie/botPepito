require('dotenv').config();
const env = process.env;
// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Caramba Pepito est là !');
});

// Login to Discord with your client's token
client.login(env.TOKEN);