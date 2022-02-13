const { MessageAttachment } = require("discord.js");
const fs = require('fs');

module.exports = {
	name: 'cagnotte',
	once: true,
	description: 'Gestion de la cagnotte de Stéphane de sa présence en CM',
	execute(message, args) {
		let contentFile;
		try{
			content = fs.readFileSync('./resource/file/cagnotte.txt', { encoding: 'utf-8' });
			contentFile = content.split('\n');
		}catch(err) {
			message.reply("Une erreur est survenue !");
			return console.err(err);
		}

		if(message.channelId != contentFile[0]){
			message.reply("Vous n'êtes pas dans le bon salon pour cette commande");
			return;
		}

		if(args[0] == null){
	
			icone = new MessageAttachment('assets/img/logo_cagnotte.png');
			messageEmbed = {
				color: 'YELLOW',
				title: "Cagnotte de Stéphane",
				description: "La cagnotte de Stéphane pour son absence aux CM s'éléve à " + contentFile[1] + "€",
				thumbnail: {
					url: 'attachment://logo_cagnotte.png'
				}
			}

			message.channel.send({ embeds: [messageEmbed], files: [icone] });

			return;
		}

		switch(args[0]){

			case "config":
				if(message.author.id != "364128944875634688"){
					message.reply("Désolé mais vous n'êtes pas autorisé à faire cela");
				}
				else if(args[1] == null){
					message.reply("J'ai besoin de l'identifiant du nouveau channel");
				}
				else{
					
					content = args[1] + "\n" + contentFile[1];

					fs.writeFile('./resource/file/cagnotte.txt', content, 'utf-8', (err, content) => {
						if(err){
							return console.error(err);
						}
						message.channel.send("Le salon de la cagnotte a été modifié");
					})

					message.delete();
				}
			break;
			
			default:
				message.reply("Cette commande n'existe pas");
			break;
		}

		
	},
};