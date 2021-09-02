
const Discord = require('discord.js');
const client = new Discord.Client({ intents: Discord.Intents.FLAGS.GUILDS_MESSAGES });
const { Client, MessageAttachment } = require('discord.js');
const fs = require('fs');

client.commands = new Discord.Collection();
let commands = client.commands = new Discord.Collection();



const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const version = '5.8.7';

client.once('ready', () => {
  console.log('Ready!');
});


client.on("message", async message => {

  if (message.author.bot) return;

  const user = message.mentions.users.first() || message.author;
  let member = message.channel.members;
  let members = message.channel.members;
  const guild = message.guild;

  let prefix = "!";
 
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

      if (command === '8ball') {
        client.commands.get('8ball').execute(message, args);
      }
)};
	  
client.login(process.env.DISCORD_TOKEN);
