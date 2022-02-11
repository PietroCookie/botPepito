module.exports = {
	name: 'ping',
	once: true,
	description: 'Réponds pong',
	execute(message, args) {
		message.channel.send("Pong !");
	},
};