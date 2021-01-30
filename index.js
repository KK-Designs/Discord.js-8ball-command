const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('<p><b>The COOL BOI BOI should be online now..</p></b><br><br><br><a href="https://stats.uptimerobot.com/n81XLfGOEv/786433082">Bot status</a><br><br><br><a href="https://repl.it/@KKDesigns/COOL-BOI-BOT#index.js">Back to repl.it project</a>'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//bot code

const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const request = require('node-superfetch');
const { MessageEmbed } = require('discord.js');
const Canvas = require('canvas');
const { registerFont } = require('canvas');
const fetch = require('node-fetch');
const moment = require("moment");
require("moment-duration-format");
const humanizeDuration = require('humanize-duration');
//const db = require('quick.db');
const Database = require("@replit/database");
const db = new Database();
const ms = require("ms");
const color = require("./color.json");
const axios = require('axios')
const cooldowns = new Map();
// Extract the required classes from the discord.js module
const { Client, MessageAttachment } = require('discord.js');
const log = console.log;
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
  console.log('© COOL BOI BOT 2021')
  console.log(`v${version}`)
  //client.user.setActivity(` !help | Serving ${client.guilds.cache.size} servers`, { type: 'LISTENING'});

  client.user.setPresence({ activity: { name: ` !help | Serving ${client.guilds.cache.size} servers`,  type: 'LISTENING'}, status: 'dnd' });
});

//client.destroy();
client.setMaxListeners(5)
const blockedUsers = ['2', '1'];
client.on("message", async message => {

  if (message.author.bot) return;
  if (message.content.startsWith('!') && message.content.length > 3 && blockedUsers.includes(message.author.id)) return message.reply('you are blacklisted from using commands');

  const user = message.mentions.users.first() || message.author;
  let member = message.channel.members;
  let members = message.channel.members;
  const guild = message.guild;

  let prefix = "!";
 
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

if (commands) {
    const cooldown = cooldowns.get(message.author.id);
    if (cooldown) {
      const remaining = humanizeDuration(cooldown - Date.now(), { round: true });

      return message.channel.send(`Wait ${remaining} before getting typing this again.`)
        
    } else {

let command1 = client.commands.get(command);
 if (command1.permissions) {
 	const authorPerms = message.channel.permissionsFor(message.author);
 	if (!authorPerms || !authorPerms.has(command1.permissions)) {
 		return message.reply('<:no:803069123918823454> You do not have permission to use this command.');
 	}
 } else if (command1.permissions == undefined) {}

if (command === 'give-mod') {
   user.send('I think your qualified enough to get mod perms so here ya go, you are now a moderator. Just don\'n abuse it pls');
}

if (command === 'tips') {
client.commands.get('tips').execute(message, args);
}

if (command === 'kpay') {
client.commands.get('kpay').execute(message, args, client, fetch, user, color);
}

      if (command === 'yeet') {
        client.commands.get('yeet').execute(message, args);
      }              

      if (command === 'invite') {
        client.commands.get('invite').execute(message, args);
      }

      if (command === 'diceroll') {

        client.commands.get('diceroll').execute(message, args, user);
      }

      if (command === 'duck') {
        client.commands.get('duck').execute(message, args, fetch, color, user);
      }

      if (command === 'meme' || command === 'memes') {        
       client.commands.get('meme').execute(message, args, fetch);
      }

      if (command === 'emojify') {
        client.commands.get('emojify').execute(message, args, user, color);
      }

      if (command === 'avatar') {
        client.commands.get('avatar').execute(message, args, color);
      }


      if (command === 'color') {
        client.commands.get('color').execute(message, args, user, color);
      }

      if (command === 'searchweb') {
        client.commands.get('searchweb').execute(message, args);
      }

      if (command === 'searchyt') {
        client.commands.get('searchyt').execute(message, args);
      }

      if (command === 'tweet') {
        client.commands.get('tweet').execute(message, args, user, fetch, color);
      }

      if (command === 'clyde') {
        client.commands.get('clyde').execute(message, args, user, fetch);
      }

      

      if (command === 'weather') {
        client.commands.get('weather').execute(message, args, axios);
      }

      if (command === 'advice') {
        client.commands.get('advice').execute(message, args, request);
      }

      if (command === '8ball') {
        client.commands.get('8ball').execute(message, args);
      }

      /*if (message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
      }*/

      if (command === 'ping') {
        client.commands.get('ping').execute(message, args, client);
      }
      
      if (command === 'num') {
        client.commands.get('num').execute(message, args, fs);
      }

            if (command === 'reload') {
        client.commands.get('reload').execute(message, args, fs);
      }

let member = message.member;      

      if (command === 'coinflip') {        
         client.commands.get('coinflip').execute(message, args);
      }

if (command === 'help') {
  client.commands.get('help').execute(message, args, prefix, user, client);
}

      if (command === 'simprate') {
        client.commands.get('simprate').execute(message, args, user);
      }

      if (command === 'zodiac') {
        client.commands.get('zodiac').execute(message, args);
      }

      if (command === 'kill') {
        client.commands.get('kill').execute(message, args, client, user);
      }

//let command1 = client.commands.get(command);
if (command1.guildOnly && message.channel.type === 'dm') {
  return message.reply('That is a server only command. I can\'t execute those inside DMs. Use `!help [command name]` to if it is server only command.');
  }

//start of Server only commands
if (command === 'server-invite') {
          client.commands.get('server-invite').execute(message, args);
        }

if (command === 'user-info' || command === 'who-is') {
        client.commands.get('user-info').execute(message, args, user);
      }




        var serverName = guild.name;
        var serverIcon = message.guild.iconURL();

        if (message.guild.id === '739992022785720361') {
          if (command === 'report' || command === 'support') {
            let report = args.slice(0).join(' ');
            if (report === "") {
              return message.reply('<:X_:752688419385245707> Please provide a reason <:X_:752688419385245707>');
            }
            message.channel.send('<:Green_tick:753047432681488405> Your support request has been sumbitted')
            const supportchannel = member.guild.channels.cache.find(ch => ch.name === 'user-support');
            const supportmessage = new MessageEmbed()
              .setColor('#5eff52')
              .setTitle('Support Message')
              .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
              .addField(`${message.author.tag}: `, report)
              .setTimestamp()
              .setFooter('Sent at:');
            supportchannel.send(supportmessage)
            //supportchannel.send(`${new Date()}\n**${message.author.tag}:** ` + report)
          }
        }

        if (command === 'role') {
          client.commands.get('role').execute(message, args, member);
        }

        if (command === 'rickroll') {
          client.commands.get('rickroll').execute(message, args);
        }

        if (command === 'leave' || command === 'disconnect') {
         client.commands.get('disconnect').execute(message, args);
        }
        
        if (command === 'kick') {
          client.commands.get('kick').execute(message, args, guild, user);
        }
        
        if (command === 'ban') {
          client.commands.get('ban').execute(message, args, guild, user);
        }
        
        /*if (commands === '!leave') {
          client.emit('guildMemberRemove', message.member);
        }*/

        if (command === 'channel') {
            client.commands.get('channel').execute(message, args);
        }

//il do this later
        if (member.hasPermission('KICK_MEMBERS')) {

          if (command === 'mute') {
            const mutemember = message.mentions.members.first();
            const muteRole = message.guild.roles.cache.find(role => role.name === "Muted");
            if (!muteRole) try {
              role = await message.guild.roles.create({
                data: {
                  name: 'Muted',
                  color: '#696969',
                  permissions: [],
                },
              });
              message.guild.channels.cache.forEach(async (channel, id) => {
                await channel.updateOverwrite(role, {
                  SEND_MESSAGES: false,
                  SPEAK: false,
                  ADD_REACTIONS: false,
                  SEND_TTS_MESSAGES: false,
                  ATTACH_FILES: false
                })
              });

              return message.channel.send(`No muterole was found, so we created one for you. Use that command again to mute the user`);

            } catch (e) {
              console.log(e.stack);
            };

            if (!args[0]) {
              message.reply('Please provide a user to mute (i.e. `!mute @annoyingguy123`)');
            }

            mutemember.roles.add(muteRole).then(message.channel.send(`${mutemember} sucesfully muted :white_check_mark:`))
          }

          if (command === 'unmute') {
            if (!args[0]) {
              message.reply('Please provide a user to unmute (i.e. `!unmute @goodUser`)');
            }

            const muteRole = message.guild.roles.cache.find(role => role.name === "Muted");

            const mutemember = message.mentions.members.first();
            mutemember.roles.remove(muteRole).then(message.channel.send(`${mutemember} sucesfully unmuted :white_check_mark:`));
          }
        }
        //end of ill do the later part

        if (command === 'server') {
          client.commands.get('server').execute(message, args, guild);
        }

        if (command === 'delete' || command === 'clear' || command === 'purge') {
         client.commands.get('delete').execute(message, args);
        }

        // Use `message.content.length`
        //let member = message.channel.members; 

        let members = message.channel.members;
        //let member = message.channel.members;

        const nonoWord = "This server is";
        if (message.content.includes(nonoWord)) {
          message.channel.send('stop being toxic');
        }

        if (!member.hasPermission('KICK_MEMBERS')) {
          
        
          const noPing = "@everyone";
          if (message.content.includes(noPing)) {
            //message.channel.bulkDelete(1);
            message.delete();
            message.reply('No pinging @~everyone');
          }

          const noInviteLinks = "https://discord.gg/";
          if (message.content.includes(noInviteLinks)) {
            message.delete();
            //message.channel.bulkDelete(1)
            message.reply('Please no invite links');

          }

          if (message.mentions.has('769415264306987068')) {
            message.channel.send('What?');
          }

          /*if (message.mentions.has('765686109073440808')) {
          message.channel.bulkDelete(1)
            message.channel.send('Please do not ping BaconMan2009 or any administrators, they won/t respond to pings. If they are talking in chat, you can talk to them without pinging them.');
          }	*/
        }

        const noEmoji = "🍆";
        if (message.content.includes(noEmoji)) {
          message.delete();
          //message.channel.bulkDelete(1)
          message.reply('Not that kind of emojis please.');
        }

        const noEmoji1 = "🥒";
        if (message.content.includes(noEmoji1)) {
          message.delete();
          //message.channel.bulkDelete(1)
          message.reply('Not that kind of emojis please.');
        }

        const noEmoji2 = "🍑";
        if (message.content.includes(noEmoji2)) {
          message.delete();
          ///message.channel.bulkDelete(1)
          message.reply('Not that kind of emojis please.');
        }

//nodm ends

      if (command === 'embed') {
        client.commands.get('embed').execute(message, args, color);
      }

      if (command === 'status') {
        client.commands.get('status').execute(message, args, color, client, version);
      }

      // the user can type the command ... your command code goes here :)

      // Adds the user to the set so that they can't talk for a minute
      // Replace the  talkedRecently.add(...)  section with this...
    let cooldownamount = command1.cooldown*1000 || 3*1000
      cooldowns.set(message.author.id, Date.now() + cooldownamount);
      setTimeout(() => cooldowns.delete(message.author.id), cooldownamount);
    }
  }


});
//const logchannel = message.guild.channels.cache.find(ch => ch.name === 'server-logs');

client.on('guildBanRemove', async (guild, user) => {

  let embed = new MessageEmbed()
    .setTitle("🔓 Member Unban")
    .setColor(color.bot_theme)
    .setDescription(`Name: ${user.username}\n \nID: ${user.id}`)
    .setFooter(`COOL BOI BOT MEMBER LOGGING`);
  guild.channels.cache.find(c => c.name === 'server-logs').send(embed);
});

client.on('guildBanAdd', async (guild, user) => {

  let embed = new MessageEmbed()
    .setTitle("🔒 Member ban")
    .setColor(color.bot_theme)
    .setDescription(`Name: ${user.username}\n \nID: ${user.id}`)
    .setFooter(`COOL BOI BOT MEMBER LOGGING`);
  guild.channels.cache.find(c => c.name === 'server-logs').send(embed);
});

client.on('guildMemberUpdate', async (oldMember, newMember) => {

  const logchannel = oldMember.guild.channels.cache.find(c => c.name == 'server-logs')
   const modLogChannel = oldMember.guild.channels.cache.find(c => c.name == 'server-logs')

     if (oldMember.nickname !== newMember.nickname) {
    const embed = new MessageEmbed()
      .setAuthor('👤 Nickname changed')
      .setColor(color.bot_theme)
      .setDescription(`<@${newMember.id}> changed their nickname`)
      .addField('Old nickname:', `${oldMember.nickname !== null ? `${oldMember.nickname}` : oldMember.user.username}`, true)
      .addField('New nickname:', `${newMember.nickname !== null ? `${newMember.nickname}` : oldMember.user.username}`, true)
      //.setThumbnail(`${oldMember.user.displayAvatarURL}`)
      .setFooter(`COOL BOI BOT MEMBER LOGGING`)
      .setTimestamp()

      modLogChannel.send(embed).catch()
  	}

  if (oldMember.roles !== newMember.roles) {
    let output = ''
    let outputNew = ''

    oldMember.roles.cache.forEach(role => {
      output += '\n' + role.name
    })

    newMember.roles.cache.forEach(role => {
      outputNew += '\n' + role.name
    })

    if (output == outputNew) return

    let embed = new MessageEmbed()
      .setAuthor('👤 Member roles updated')
      .setColor(color.bot_theme)
      .setDescription(`\Roles updated for <@${newMember.id}>`)
      .addField('Old roles:', `${output}`, true)
      .addField('New roles:', `឵${outputNew}`, true)
      .setThumbnail(`${oldMember.user.displayAvatarURL({ dynamic: true })}`)
      .setFooter(`COOL BOI BOT MEMBER LOGGING`)
      .setTimestamp()

    logchannel.send(embed).catch()
  }

});

client.on('emojiUpdate', async (oldemoji, newemoji) => {

  let embed = new MessageEmbed() // Create embed
    .setTitle("📝 Emoji Update") // Set embed title
    .setColor(color.bot_theme) // Set color in HEX
    .setDescription(newemoji.animated == true ? `New Name: <a:${newemoji.name}:${newemoji.id}> ${newemoji.name}\n \nOld Name: ${oldemoji.name}\n \nID: ${newemoji.id}` : `New Name: <:${newemoji.name}:${newemoji.id}> ${newemoji.name}\n \nOld Name: ${oldemoji.name}\n \nID: ${newemoji.id}`)
    .addField("New Emoji URL", newemoji.url)
    .addField("Old Emoji URL", oldemoji.url)
    .setFooter(`COOL BOI BOT SERVER LOGGING`)
    .setTimestamp()

  newemoji.guild.channels.cache.find(c => c.name === 'server-logs').send(embed);

});

client.on('channelDelete', async channel => {

  if (channel.type == "dm") return
  	
      if (channel.guild.channels.cache.find(c => c.name == 'server-logs')) {
      const modLogChannel = channel.guild.channels.cache.find(c => c.name == 'server-logs')
      if (!modLogChannel.permissionsFor(channel.guild.me).has('VIEW_CHANNEL')) return
      if (!modLogChannel.permissionsFor(channel.guild.me).has('SEND_MESSAGES')) return
      const embed = new MessageEmbed()
        .setAuthor('⛔ Channel deleted')
        .setColor(color.fail)
        .setDescription(`Deleted channel ${channel}`)
        .setFooter(`COOL BOI BOT SERVER LOGGING`)
        .setTimestamp()

      modLogChannel.send(embed)

}
});

client.on('channelCreate', async channel => {

  if (channel.type == "dm") return
  	
      if (channel.guild.channels.cache.find(c => c.name == 'server-logs')) {
      const modLogChannel = channel.guild.channels.cache.find(c => c.name == 'server-logs')
      if (!modLogChannel.permissionsFor(channel.guild.me).has('VIEW_CHANNEL')) return
      if (!modLogChannel.permissionsFor(channel.guild.me).has('SEND_MESSAGES')) return
      const embed = new MessageEmbed()
        .setAuthor('🔨 Channel created')
        .setColor(color.success)
        .setDescription(`Created channel ${channel}`)
        .setFooter(`COOL BOI BOT SERVER LOGGING`)
        .setTimestamp()

      modLogChannel.send(embed)

}
});

client.on('emojiDelete', async emoji => {

  let embed = new MessageEmbed()
    .setTitle("⛔ Emoji Delete")
    .setColor(color.bot_theme)
    .setDescription(`Name: ${emoji.name}\nID: ${emoji.id}`)
    .addField("Emoji URL", emoji.url)
    .setFooter(`COOL BOI BOT SERVER LOGGING`)
    .setTimestamp()
  emoji.guild.channels.cache.find(c => c.name === 'server-logs').send(embed);

});

client.on('emojiCreate', async emoji => {

  let embed = new MessageEmbed()
    .setTitle("➕ Emoji Create")
    .setColor(color.bot_theme)
    .setDescription(emoji.animated ? `Name: <a:${emoji.name}:${emoji.id}> ${emoji.name}\nID: ${emoji.id}` : `Name: <:${emoji.name}:${emoji.id}> ${emoji.name}\nID: ${emoji.id}`)
    .addField("Emoji URL", emoji.url)
    .setFooter(`COOL BOI BOT SERVER LOGGING`)
    .setTimestamp()
  emoji.guild.channels.cache.find(c => c.name === 'server-logs').send(embed);

});
client.on('messageUpdate', async (message, messageNew) => {

  if (message.content === messageNew.content) return;
   if (message.author.bot) return;
  if (message === "" || messageNew === "") {
    return;
  }
  const embed = new MessageEmbed()
    .setAuthor('📝 Message updated')
    .setColor(color.bot_theme)
    .setDescription(`Message edited in ${message.channel}`)
    .addField('Old message:', `${message}`, true)
    .addField('New message:', `${messageNew}`, true)
    .setFooter(`COOL BOI BOT MESSAGE LOGGING`)
    .setTimestamp()

  message.guild.channels.cache.find(channel => channel.name == 'server-logs').send(embed).catch()
});

client.on('messageDeleteBulk', async message => {
if (message.first().channel.name == 'server-logs') return;
  const messageChannel = message.first().channel.name;
  const logchannel = message.first().guild.channels.cache.find(channel => channel.name == 'server-logs');

  let channel = message.first().channel;

  if (logchannel) {
    let messageArray = message.array();    
    messageArray.slice(10, messageArray.length); // Slice removes all ements from the first number to the second number in an array. We use this to cut off the length of the array
    let stringedArray = messageArray.join("\n") // We join the array using \n to separate the lines
    if (stringedArray.length > 1500) {
      stringedArray.slice(1500, stringedArray.length)
      stringedArray += "..."
    }
    const embed = new MessageEmbed()
    .setColor(color.bot_theme)
    .setAuthor(`Messages Purged in #${messageChannel}`)
    .setTitle(`Message Bulk delete by ${message.first().author.tag} deleted ${message.size - 1} messages`)
    .setDescription(stringedArray)    
    //.setDescription(message.first())    
    .setFooter(`COOL BOI BOT MESSAGE LOGGING`)
    .setTimestamp()
    //console.log(message)    
     logchannel.send(embed).catch(console.error);
  }
});

client.on('messageDelete', async message => {
  if (message.channel.type === 'dm') return;
  if (message.author.bot) return;
  if (message.content === "") return;
  const messageChannel = message.channel.name
  const logchannel = message.guild.channels.cache.find(ch => ch.name === 'server-logs');
  if (!logchannel) return;
  // ignore direct messages
  if (!message.guild) return;
  const fetchedLogs = await message.guild.fetchAuditLogs({
    limit: 1,
    type: 'MESSAGE_DELETE',
  });
  // Since we only have 1 audit log entry in this collection, we can simply grab the first one
  const deletionLog = fetchedLogs.entries.first();

  // Let's perform a coherence check here and make sure we got *something*
  if (!deletionLog) return console.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`)

  // We now grab the user object of the person who deleted the message
  // Let us also grab the target of this action to double check things
  const { executor, target } = deletionLog;
  const user = executor.tag;
  const delembed = new MessageEmbed()
    .setColor(color.bot_theme)
    .setAuthor(executor.tag, executor.displayAvatarURL({ dynamic: true }))
    .setTitle(`Message by ${message.author.tag} was deleted in #${messageChannel}, by ${executor.tag}`)
    .setDescription(message.content)
    .setFooter(`COOL BOI BOT MESSAGE LOGGING`)
    .setTimestamp()

  const delembed1 = new MessageEmbed()
    .setColor(color.bot_theme)
    //.setAuthor(executor.tag,  executor.displayAvatarURL({ dynamic: true }))
    .setTitle(`Message by ${message.author.tag} was deleted in #${messageChannel}`)
    .setDescription(message.content)
    .setFooter(`COOL BOI BOT MESSAGE LOGGING`)
    .setTimestamp()

  if (message.author.bot) return;
  // And now we can update our output with a bit more information
  // We will also run a check to make sure the log we got was for the same author's message
  if (target.id === message.author.id) {
    logchannel.send(delembed);
  } else {
    logchannel.send(delembed1);
  }
});

// Pass the entire Canvas object because you'll need to access its width, as well its context
registerFont('./OpenSans-Regular.ttf', { family: 'sans-serif' });
const applyText = (canvas, text) => {
  const ctx = canvas.getContext('2d');

  // Declare a base size of the font
  let fontSize = 70;

  do {
    // Assign the font to the context and decrement it so it can be measured again
    ctx.font = `${fontSize -= 10}px sans-serif`;
    // Compare pixel width of the text to the canvas minus the approximate avatar size
  } while (ctx.measureText(text).width > canvas.width - 300);

  // Return the result to use in the actual canvas
  return ctx.font;
};


// Create an event listener for new guild members
client.on('guildMemberAdd', async member => {
  const guild = member.guild;
  // Send the message to a designated channel on a server:
  /*const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-and-goodbye');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Hey ${member}, welcome to **${guild.name}!**`);*/
  //member.send(`Have a good time here in **${guild.name}**! Please make sure to read the rules before sending in #rules. If you have a problem with this server, Dm @ModMail#5460 for help. `);
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-and-goodbye');
  if (!channel) return;

  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext('2d');

  const background = await Canvas.loadImage('./wallpaper.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#74037b';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // Slightly smaller text placed above the member's display name
  ctx.font = '32px sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`Hey ${member.user.username},`, canvas.width / 2.5, canvas.height / 3.5);

  ctx.font = '34px sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`welcome to the`, canvas.width / 2.5, canvas.height / 2.2);

  // Add an exclamation point here and below
  ctx.font = '48px sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`${guild.name}!`, canvas.width / 2.5, canvas.height / 1.3);

  ctx.beginPath();
  ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
  ctx.drawImage(avatar, 25, 25, 200, 200);

  const welattachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

  channel.send(`Hey ${member}, welcome to **${guild.name}!**`, welattachment);
});


// Create an event listener for removed guild members
client.on('guildMemberRemove', member => {
  //member.send("Were sad you left <:Blob_disappointedface:753456000027197556> . But if you want to join back you can join using this link: https://discord.gg/wdjxthF");
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-and-goodbye');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`${member} just left the server  :c`);
});

client.login(process.env.DISCORD_TOKEN);