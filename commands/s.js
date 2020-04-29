exports.run = async (client, message, args, ops) => {
  
   let fetched = ops.active.get(message.guild.id);
  
  if(!fetched) return message.reply('ไม่มีเพลงที่เล่นในขณะนี้');
  
  if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.reply('นายท่านกับผมไม่ได้อยู่ในห้องเดียวกันครับ');
  
  if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
  
  fetched.queue[0].voteSkips.push(message.member.id);
  
  ops.active.set(message.guild.id, fetched);
  
  fetched.dispatcher.emit('end')
  
}