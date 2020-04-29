const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = 'c.';
const ownerID = '562428190644109332';
const active = new Map();

bot.on('message', message => {
  
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();
  
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  if(!message.content.startsWith(prefix)) return;
  
  try {
    
    delete require.cache[require.resolve(`./commands/${cmd}.js`)];
    
    let ops = {
      ownerID: ownerID,
      active: active
    }
    
    let commandFile = require(`./commands/${cmd}.js`)
    commandFile.run(bot, message, args, ops);
    
  } catch(e) {
    console.log(e.stack)
  }
  
});

bot.on('ready', () => {
  console.log(`Checking....`) 
    console.log(`Logged in as ${bot.user.tag}`)
  	bot.user.setStatus('available')
  bot.user.setPresence({
      game: {
          name: `${bot.guilds.size} servers | c.help`,
          type: `playing`,
          url: "https://www.twitch.tv/Anime"
      }
  });

})
  bot.login('NjczNDYxNDEzNDQ3OTkxMzA2.Xqjcmw.wpPmGx5Ef85c-Q-tOMT1GHDUdFQ')
