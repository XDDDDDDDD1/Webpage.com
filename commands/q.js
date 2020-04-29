const discord = require(`discord.js`);
exports.run = async (client, message, args, ops) => {
  
  let fetched = ops.active.get(message.guild.id);
  
  if(!fetched) return message.reply('ไม่มีเพลงที่เล่นในขณะนี้');
  
  let queue = fetched.queue;
  let nowPlaying = queue[0];
  
  
  
  for (var i = 1; i < queue.length; i++) {
    let resp = new discord.RichEmbed()
    .setAuthor(`Music Queue🎵`)
    .addField(`\`เพลงในคิว\``, `-[${queue[i].songTitle}](${queue[1].url}) (${queue[1].sec}) \`| ${queue[1].requester}\``)
    .addField(`\`กำลังเล่นเพลง\``, `[${nowPlaying.songTitle}](${nowPlaying.url}) \`| ${nowPlaying.requester}\``)
    .setColor(`#00DEFF`)
    .setFooter(`Music System by 𝙲𝙾𝙾𝙻 𝙱𝙾𝚈𝚉 ᴼᶠᶠᴵᶜᴵᵃˡ#2567`, `https://cdn.discordapp.com/avatars/562428190644109332/032cdc251d434a1e33809fed0723a919.png?size=2048`)
    
  
  
  message.channel.send(resp).then(msg => {
    msg.react('🆗')
    
    const okf = (reaction, user) => {
    return ['🆗'].includes(reaction.emoji.name) && user.id === message.author.id; };
    
    msg.awaitReactions(okf, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();
      
      if (reaction.emoji.name === '🆗') {
            msg.delete()
      }
    })
    .catch(collected => {
        msg.delete()
    });
  })
  }
}