
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot${client.user.tag}adı ile giriş yaptı!`);
});
client.on("ready", () => {client.user.setGame('o!yardım | Eski Sürümü Yükledim Güncelleme Olmayacak | Sunucu Sayısı: ' + client.guilds.size , 'https://twitch.tv/GardropFuat') 



});




client.login(process.env.BOT_TOKEN);
