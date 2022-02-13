module.exports = {
	name: 'help',
	once: true,
	description: 'Affiche la liste des commandes',
	execute(message, args) {
		const messageEmbed = {
			color: 'YELLOW',
			title: 'Mes commandes',
			description: "Bon si tu n'est pas débile tu as compris que ça t'affichait la liste des commandes",
			fields: [
				{
					name: "\u200b",
					value: "\u200b"
				},

				{
					name: "help",
					value: "Baaah ça affiche cette commande ... Va pas falloir ête con aussi"
				},

				{
					name: "say",
					value: "Permet de me faire dire ce que l'on souhaite"
				},

				{
					name: "cagnotte",
					value: "Permet de gérer la cagnotte d'absence de Stéphane, en espérant que cela le motive !"
				},

				{
					name: "[NULL]",
					value: "Sans argument la commande affiche la cagnotte actuelle",
					inline: true
				},
				{
					name: "config",
					value: "Cela permet de modifier le salon dans lequel on peut utiliser la cagnotte",
					inline: true
				}
			]
		}

		message.channel.send({ embeds: [messageEmbed] });
	}
}