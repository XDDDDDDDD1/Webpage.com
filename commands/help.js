const discord = require('discord.js')
exports.run = async (bot, message, args, tool) => {
  
  let vs = 'เวอร์ชั่น 0.1 𝙲𝙾𝙾𝙻 𝙱𝙾𝚈𝚉 Rewrite!'
  
  let embed = new discord.RichEmbed()
  .setAuthor('𝙲𝙾𝙾𝙻 𝙱𝙾𝚃𝚉 Commands')
  .setColor(`#00DEFF`)
  .setDescription(`สวัสดีครับผมคูลเองน้าจำกันได้มั้ยเอ่ยถ้าอยากรู้ผมทำไรได้ก็สามารถกด **REACT** ปุ่มต่างๆเหล่านี้ได้เลยนะครับ`)
  .addField(`ติดต่อผู้ดูแลระบบ💭`, `\`ลิ้งเชิญบอท\` [INVITE](https://discordapp.com/api/oauth2/authorize?client_id=673461413447991306&permissions=8&scope=bot)
\`Discord\` [𝙲𝙾𝙾𝙻 𝙱𝙾𝚃𝚉 • Server](https://discord.gg/6sSrNfT)
\`Website\` **ยังไม่มี**`)
  .setFooter(vs, message.author.displayAvatarURL)
  .setTimestamp()
  
  message.channel.send(embed).then(msg => {
msg.react('🏠').then(r => {
msg.react('🎵').then(r => {
 msg.react(`🎉`).then(r => {
 msg.react(`📺`).then(r => {
 msg.react(`📝`).then(r => {
 msg.react(`🤔`).then(r => {
 msg.react(`🚫`).then(r => {
 msg.react(`⛏️`)
  
  const homef = (reaction, user) => reaction.emoji.name == '🏡' && user.id === message.author.id;
  const musicf = (reaction, user) => reaction.emoji.name == '🎵' && user.id === message.author.id;
  const partyf = (reaction, user) => reaction.emoji.name == '🎉' && user.id === message.author.id;
  const tvf = (reaction, user) => reaction.emoji.name == '📺' && user.id === message.author.id;
  const notef = (reaction, user) => reaction.emoji.name == '📝' && user.id === message.author.id;
  const thinkf = (reaction, user) => reaction.emoji.name == '🤔' && user.id === message.author.id;
  const adminf = (reaction, user) => reaction.emoji.name == '🚫' && user.id === message.author.id;
  const minef = (reaction, user) => reaction.emoji.name == '⛏️' && user.id === message.author.id;
  
  const home = msg.createReactionCollector(homef, { time: '600000' });
   const music = msg.createReactionCollector(musicf, { time: '600000' });
   const party = msg.createReactionCollector(partyf, { time: '600000' });
   const tv = msg.createReactionCollector(tvf, { time: '600000' });
   const note = msg.createReactionCollector(notef, { time: '600000' });
   const think = msg.createReactionCollector(thinkf, { time: '600000' });
   const admin = msg.createReactionCollector(adminf, { time: '600000' });
   const mine = msg.createReactionCollector(minef, { time: '600000' });
   
   music.on('collect', r => {
let a = new discord.RichEmbed()
.setAuthor(`𝙲𝙾𝙾𝙻 𝙱𝙾𝚃𝚉 Music🎵`, bot.user.displayAvatarURL)
.addField(`คำสั่งเพลงต่างๆ`, `\`c.p <ชื่อเพลง|url>\` คำสั่งเล่นเพลง
\`c.s\` คำสั่งข้ามเพลง
\`c.q\` คำสั่งดูคิวเพลง
\`c.np\` คำสั่งดูเพลงที่กำลังเล่นอยู่ในขณะนั้น
\`c.loop\` เปิดการวนซํ้า (ปิดชั่วคราว)
\`c.remove <เพลงที่เท่าไหร่>\` ลบเพลงที่ระบุจากคิว
\`c.pause\` หยุดเพลงชั่วคราว
\`c.resume\` เล่นเพลงต่อ`)
.setColor('#00DEFF')
.setFooter(vs, message.author.displayAvatarURL)
  .setTimestamp()


msg.edit(a)
})
   party.on('collect', r => {
     let b = new discord.RichEmbed()
     .setTitle('คำสั่งการกระทำ 🎉')
     .setDescription(`\`c.bite (แท็คผู้ใช้)\` กัด
\`c.hug (แท็คผู้ใช้)\` กอด
\`c.kiss (แท็คผู้ใช้)\` จูบ
\`c.pat (แท็คผู้ใช้)\` ลูบหัว`)
     .setColor('#00DEFF')
.setFooter(vs, message.author.displayAvatarURL)
  .setTimestamp()

     msg.edit(b)
})
   tv.on('collect', r => {
     
     let d = new discord.RichEmbed()
     .setTitle('คำสั่งทั่วไป 📺')
     .setDescription(`\`c.help\` เปิดดูคำสั่งทั้งหมด
\`c.gold\` ดูราคาทอง
\`c.rps\` เป่ายิงฉุบ
\`c.flip\` เล่นกำกรรไกร
\`c.quiz\` ตอบคำถาม
\`c.loli\` ค้นภาพ loli จาก nekoapi
\`c.loli nsfw\` ค้นภาพ loli เปลือยจาก nekoapi
\`c.donate\` เปิดหน้าโดเนท`)
          .setColor('#00DEFF')
.setFooter(vs, message.author.displayAvatarURL)
  .setTimestamp()
     
     msg.edit(d)

})
   note.on('collect', r => {

     let e = new discord.RichEmbed()
     .setTitle('คำสั่งข้อมูลต่างๆ 📝')
     .setDescription(`\`c.profile\` ดูโปรไฟล์
\`c.level\` สำหรับเช็คเลเวล
\`c.leaderboard\` เช็คอันดับประจำบอท
\`c.leaderinvite\` เช็คข้อมูลการเชิญสูงสุด
\`c.invite (แท็คผู้ใช้)\` เช็คข้อมูลการเชิญ
\`c.guild\` สำหรับดูข้อมูลเซิฟ
\`c.roblox (ชื่อในเกมส์)\` สำหรับเช็คข้อมูล roblox
\`c.skin (ชื่อในเกมส์) (steal หรือ head)\` สำหรับดูสกิน Minecraft
\`c.server (ไอพี่)\` ดูเซิฟเวอร์ Minecraft
\`c.hypixel (ชื่อในเกมส์) (bedwar และ skywar หรือไม่ใส่ก็ได้)\` สำหรับเช็คเซิฟ hypixel`)
     .setColor('#00DEFF')
     .setFooter(vs, message.author.displayAvatarURL)
     .setTimestamp()
     
     msg.edit(e)
})
   think.on('collect', r => {

      let f = new discord.RichEmbed()
     .setTitle('คำสั่งช่วยเหลือต่างๆ 🤔')
     .setDescription(`\`c.ticket\` สำหรับสร้างตั๋วห้องส่วนตัว
\`c.tran (คำที่จะแปลเป็นไทย)\` สำหรับแปลภาษา
\`c.msg (แท็คผู้ใช้) (ข้อความ)\` สำหรับส่งข้อความ (Only trun on DM)
\`c.live\` สำหรับไลฟ์จอ (PC only)
\`c.calc (คำถามคณิตศาสตร์เช่น 1+1)\` เครื่องคิดเลข`)
     .setColor('#00DEFF')
     .setFooter(vs, message.author.displayAvatarURL)
     .setTimestamp()
      
      msg.edit(f)
})
   admin.on('collect', r => {
  
    let g = new discord.RichEmbed()
    .setTitle('คำสั่งแอดมิน 🚫')
    .setDescription(`\`c.ban (ผุ้ใช้) (เหตุผล)\` สำหรับแบนผู้ใช้ออกดิส
\`c.kick (ผุ้ใช้) (เหตุผล)\` สำหรับเตะผู้ใช้ออกดิส
\`c.clear (จำนวนข้อความ 2 - 100)\` สำหรับลบข้อความ
\`c.news (คำที่จะประกาศ)\` สำหรับประกาศ
\`c.say (คำที่จะพิมพ์)\` สำหรับบอทพิมพ์ตาม
\`c.rroom\` สำหรับลบห้องที่ไม่ใช้
\`c.roleall (แท็คยศ)\` สำหรับให้ยศทั้งหมด
\`c.delroleall (แท็คยศ)\` สำหรับลบยศทั้งหมด
\`c.role (แท็คผู้ใช้) (แท็คยศ)\` สำหรับให้ยศ
\`c.delrole (แท็คผู้ใช้) (แท็คยศ)\` สำหรับลบยศ`)
    .setColor('#00DEFF')
    .setFooter(vs, message.author.displayAvatarURL)
    .setTimestamp()
    
    msg.edit(g)
})
   mine.on('collect', r => {

     let h = new discord.RichEmbed()
     .setAuthor('Cmonney คืออะไร? 💬')
     .setTitle('Cmoney คือสกุลเงินดิจิตอลที่สร้างโดย `𝙲𝙾𝙾𝙻 𝙱𝙾𝚈𝚉 ᴼᶠᶠᴵᶜᴵᵃˡ#2567`')
     .addField('**Cmoney** นำไปทำอะไรได้บ้าง ❓', `ในอนาคตบอทจะมีระบบที่พรีเมียมและต้องใช้ **Cmoney**
ในตอนนี้มีแค่คำสั่ง \`c.mine shop\` ที่ใช้ **Cmoney**`)
     .addField('**Cmoney** หาได้จากไหน ⛏️', `จากการพิมข้อความ
และได้จากการขุดโดยใช้คำสั่ง \`c.mine\``)
     .addField('**Cmoney** รวมคำสั่ง 💻', `\`c.money\` ดูจำนวน Cmoney
\`c.mine shop\` เปิดร้านที่ใช้ Cmoney
\`c.mine\` ขุด Cmoney
\`c.pay (แท็คผู้ใช้) (จำนวน)\` โอน Cmoney ให้คนอื่น
\`c.network\` ดูระบบเศรษฐกิจของ Cmoney
\`c.topmoney\` สำหรับเช็คเงินสูงสุดของบอท`)
     .addField('**Cmoney** Beta ⚡', `เนื่องจากยังอยู่ในช่วงพัฒนาบางเวลาอาจใช้คำสั่งในส่วนของ **Cmoney** ไม่ได้
แต่คุณยังที่จะใช้คำสั่งในส่วนอื่นๆได้นะครับ 😊`)
     .setColor('#00DEFF')
     .setFooter(vs, message.author.displayAvatarURL)
     .setTimestamp()
     
     msg.edit(h)
})
   home.on('collect', r => {
     let i = new discord.RichEmbed()
     .setAuthor(`𝙲𝙾𝙾𝙻 𝙱𝙾𝚃𝚉 Commands`)
     .setDescription(`สวัสดีครับผมคูลเองน้าจำกันได้มั้ยเอ่ยถ้าอยากรู้ผมทำไรได้ก็สามารถกด **REACT** ปุ่มต่างๆเหล่านี้ได้เลยนะครับ`)
     .addField(`ติดต่อผู้ดูแลระบบ💭`, `\`ลิ้งเชิญบอท\` [INVITE](https://discordapp.com/api/oauth2/authorize?client_id=673461413447991306&permissions=8&scope=bot)
\`Discord\` [𝙲𝙾𝙾𝙻 𝙱𝙾𝚃𝚉 • Server](https://discord.gg/6sSrNfT)
\`Website\` **ยังไม่มี**`)
     .setColor(`#00DEFF`)
     .setFooter(vs, message.author.displayAvatarURL)
     .setTimestamp()
     
     msg.edit(i)
   })
  
 })})})})})})})})
}