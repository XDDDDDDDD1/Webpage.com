const ytdl = require(`ytdl-core`)
const yt = require('yt-search')
const discord = require('discord.js')
exports.run = async (bot, message, args, ops, prefix) => {
  if(!message.member.voiceChannel) return message.reply('กรุณาเข้าห้องเสียงก่อนครับ');

  if(!args[0]) return message.reply('กรุณาใส่ลิ้งเพลงไว้ด้วยครับ');

  let validate = await ytdl.validateURL(args[0]);

  if(!validate) return message.reply('ลิ้งเพลงไม่ถูกต้องกรุณาระบุให้ถูกต้องด้วยครับ');

  
  let data = ops.active.get(message.guild.id) || {};
  
  if(!data.connection) data.connection = await message.member.voiceChannel.join();
  if(!data.queue) data.queue = [];
  data.guildID = message.guild.id;
  
  let info = await ytdl.getInfo(args[0])
    
    let thumbnail = info.thumbnail_url
  
  let time = info.length_seconds
  var hours = Math.floor(time/3600)
  var minutes = Math.floor(time/60) - hours * 60;
var seconds = `${time - Math.floor(time / 60) * 60}`; 
    
    
  
  data.queue.push({
    songTitle: info.title,
    requester: message.author.username,
    url: args[0],
    announceChannel: message.channel.id,
    desc: info.description.split('\n', 2), 
    av: message.author.displayAvatarURL,  
    sec: `${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`,
    im: thumbnail
  })
  
  if(!data.dispatcher) play(bot, ops, data);
  else {
    
    let b = new discord.RichEmbed()
    .setColor(`#459A16`)
    .setDescription(`✅[${info.title}](${args[0]})\`(${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที)\` ถูกเพิ่มเข้าคิวแล้ว`)
    
    message.channel.send(b)
    
  }
  
  ops.active.set(message.guild.id, data)
  
  
}

async function play(bot, ops, data, prefix) {
  
  let embed = new discord.RichEmbed()
  .setTitle(`**${data.queue[0].songTitle}**`)
  .setColor('#00DEFF')
  .setURL(data.queue[0].url)
  .setDescription(data.queue[0].desc)
  .setFooter(`ร้องขอเพลง ${data.queue[0].requester}`, data.queue[0].av)
  .addField(`ระยะเวลา \`${data.queue[0].sec}\``, `หากต้องการข้ามพิมพ์ \`c.s\``)
  .setThumbnail(data.queue[0].im)
 let msg = await bot.channels.get(data.queue[0].announceChannel).send(embed);
  
  data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly' }));
  data.dispatcher.guildID = data.guildID;
  
  data.dispatcher.once('end', function() {
    finish(bot, ops, this);
  });
   
  
  
  
}

function finish(bot, ops, dispatcher, message, data) {
  
  let fetched = ops.active.get(dispatcher.guildID);
  
  fetched.queue.shift();
  
  if(fetched.queue.length > 0) {
    
    ops.active.set(dispatcher.guildID, fetched);
    
    play(bot, ops, fetched);
    
  } else {
    
    ops.active.delete(dispatcher.guildID);
    if(!fetched) {
      bot.guilds.get(dispatcher.guildID).me.voiceChannel.leave();
      let ended = new discord.RichEmbed()
      .setDescription(`คิวหมดแล้ว`)
      .setColor(`#459A16`)
      
      bot.channels.get(data.queue[0].announceChannel).send(ended)
    }
     let vc = bot.guilds.get(dispatcher.guildID).me.voiceChannel;
    if(vc) vc.leave();
    
  }
  
}