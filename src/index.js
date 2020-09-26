'use strict';

const commands = require('./commands');

module.exports = function createBot(client, db, { commandPrefix, token }) {
	client.on('ready', () => {
		console.log(`Bot started at ${new Date().toLocaleTimeString()}`);
		console.log(`Logged in as ${client.user.tag}!`);
	});

	client.on('message', msg => {
		if (msg.content.startsWith(commandPrefix)) {
			const [commandName, ...args] = msg.content
				.trim()
				.replace(new RegExp(`^${commandPrefix}`), '')
				.split(/\s+/g);

			const command = commands[commandName];
			if (command) command({ msg, db }, ...args);
		}
	});

	client.login(token);
};
