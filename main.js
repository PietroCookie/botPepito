require('dotenv').config();

const fs = require('fs');
const env = process.env;
const { Client, Intents, Collection, Interaction, ReactionUserManager, DiscordAPIError } = require('discord.js');
const { prefix } = require('./config.json');

// Crée le bot Pepito
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Quand Pepito est prêt exécute ce code
client.once('ready', () => {
	console.log('Caramba Pepito est là !');
<<<<<<< HEAD

	client.user.setPresence({ activities: [{name: "El Mariachi", type: "LISTENING"}] });
=======
>>>>>>> 356df08365c033d3a8b78be3b9ca4ca237ffe554
});

client.login(env.TOKEN);