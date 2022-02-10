require('dotenv').config();

const fs = require('fs');
const env = process.env;
const { Client, Intents } = require('discord.js');
const { prefix } = require('./config.json');

// Crée le bot Pepito
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Quand Pepito est prêt exécute ce code
client.once('ready', () => {
	console.log('Caramba Pepito est là !');

	client.user.setPresence({ activities: [{name: "El Mariachi", type: "LISTENING"}] });
});

client.login(env.TOKEN);