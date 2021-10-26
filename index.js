const { Client, MessageAttachment, Intents, Collection } = require('discord.js');
const client = new Client({ intents: Intents.FLAGS.GUILD, Intents.FLAGS.GUILDS_MESSAGES });
const fs = require('fs');
client.commands = new Collection();
let commands = client.commands = new Collection();



const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});


client.on("messageCreate", async message => {
		const user = message.mentions.users.first() || message.author;
		const member = message.channel.members;
		const members = message.channel.members;
		const guild = message.guild;
		const prefix = "!";
		if (message.author.bot || message.content.toLowerCase().startsWith(prefix)) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const command = args.shift().toLowerCase();

		if (command === '8ball') {
			client.commands.get('8ball').execute(message, args, client);
		}
	)
};

client.login(process.env.DISCORD_TOKEN);
