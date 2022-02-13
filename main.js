require('dotenv').config();

const fs = require('fs');
const env = process.env;
const { Client, Intents, Collection } = require('discord.js');
const { prefix } = require('./config.json');

// Crée le bot Pepito
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });

// Récupère toutes les commandes du dossier commands
client.commands = new Collection();
const commandFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFile){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Quand Pepito est prêt exécute ce code
client.once('ready', () => {
	console.log('Caramba Pepito est là !');

	client.user.setPresence({ activities: [{name: "El Mariachi", type: "LISTENING"}] });
});

// Dès qu'un message est créer, cette fonction est appelée
client.on('messageCreate', message => {
	if(!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	/*if(message.author.id == "368488795969945600"){
		message.reply("T'as cru que tu allais me donner des ordres toi ??");
		return;
	}*/

	if(!client.commands.has(command)) return message.channel.send("Commande inexistante !");

	try{
		client.commands.get(command).execute(message, args);
	}catch(error){
		console.log(error);
		message.channel.send("Une erreur est survenue");
	}
});

client.login(env.TOKEN);