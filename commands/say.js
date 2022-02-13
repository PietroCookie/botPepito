module.exports = {
	name: 'say',
	once: true,
	description: 'Permet de lui faire dire ce que l\'on veut',
	execute(message, args) {
		let reponse = "";

		for(word of args){
			reponse += word + " ";
		}

		message.channel.send(reponse);
		message.delete();
	},
};