module.exports = {
	name: 'cagnotte',
	once: true,
	description: 'Gestion de la cagnotte de Stéphane de sa présence en CM',
	execute(message, args) {
		message.channel.send("Cagnotte");
	},
};