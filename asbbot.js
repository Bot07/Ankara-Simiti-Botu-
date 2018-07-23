
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot${client.user.tag}adı ile giriş yaptı!`);
});
client.on("ready", () => {client.user.setGame('o!yardım | Eski Sürümü Yükledim Güncelleme Olmayacak | Sunucu Sayısı: ' + client.guilds.size , 'https://twitch.tv/GardropFuat') 



});
client.on('message', msg => {
 if (msg.content === 'o!ping') {
    msg.reply(`Pong! ${client.ping/1000} saniye`);
  }
});

client.on('message', msg => {
  if (msg.content === 'o!pong') {
    msg.reply('Ping!');
  }
});

client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find('name', 'member-log');
 
  if (!channel) return;
  
  channel.send(`Servera hoşgeldin, ${member}`);
});

client.on('message', msg => {
  if (msg.content === 'merhaba') {
    msg.reply('Hoşgeldin');
  }
});
client.on('message', msg => {
  if (msg.content === 'yav') {
    msg.reply('Tam bir Ankaralı!');
  }
});
client.on('message', msg => {
  if (msg.content === 'yaw') {
    msg.reply('Tam bir Ankaralı!');
  }
});
client.on('message', msg => {
  if (msg.content === 'la') {
    msg.reply('Tam bir Ankaralı!');
  }
});
client.on('message', msg => {
  if (msg.content === 'lan') {
    msg.reply('Lan ne? lan ne? düzgün konuş milletle!');
	msg.delete (msg.content == 'lan')
  }
});

client.on('message', msg => {
  if (msg.content === 'gevrek') {
    msg.reply('Selam olsun sana İzmirli simit sever!');
  }
});
client.on('message', msg => {
  if (msg.content === 'simit') {
    msg.reply('öhö! Ankara Simiti öhö!');
  }
});
client.on('message', msg => {
  if (msg.content === 'beta bot') {
    msg.reply('olamaz mı? Geliştiriliyorum işte. Alındım... Üzdün beni');
  }
});
client.on('message', msg => {
  if (msg.content === 'bekle') {
    msg.reply('Kesin çok uzun sürücek benden söylemesi :D');
  }
});
client.on('message', msg => {
  if (msg.content === 'sana soran oldu mu simit?') {
    msg.reply('Ben Ankara Simitiyim bana şekil şukul yapma, aklını laırım senin! Susamlarımla döverim lan seni!');
  }
});
client.on('message', msg => {
  if (msg.content === 'AgentSLayer') {
    msg.reply('Rahat bırakın, bi salın');
  }
});
client.on('message', msg => {
  if (msg.content === 'https://medium.com/@renesansz/tutorial-creating-a-simple-discord-bot-9465a2764dc0') {
    msg.reply('Eski zamanlar');
  }
});
client.on('message', msg => {
  if (msg.content === 'bot') {
    msg.reply('Botmuş tek bot benim lan burda! Adam olun hepinizi ha!');
  }
});
client.on('message', msg => {
  if (msg.content === ':D') {
    msg.reply(':D');
  }
});
client.on('message', msg => {
  if (msg.content === 'selam') {
    msg.reply('Selam');
  }
});
client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('as');
  }
});
client.on('message', msg => {
  if (msg.content === 'o!ekle') {
    msg.reply('işte botu ekleme linki: https://discordapp.com/oauth2/authorize?client_id=393434339473358869&scope=bot&permissions=0');
  }
});
client.on('message', msg => {
  if (msg.content === 'by') {
    msg.reply('Görüşürüz');
  }
});
client.on('message', msg => {
  if (msg.content === 'slm') {
    msg.reply('Selam');
  }
});
client.on('message', msg => {
  if (msg.content === 'günaydın') {
    msg.reply('Günaydın');
  }
});
client.on('message', msg => {
  if (msg.content === 'iyi akşamlar') {
    msg.reply('İyi akşamlar');
  }
});
client.on('message', msg => {
  if (msg.content === 'iyi geceler') {
    msg.reply('İyi geceler');
  }
});
client.on('message', msg => {
  if (msg.content === 'bb') {
    msg.reply('Görüşürüz');
  }
});client.on('message', msg => {
  if (msg.content === 'görüşürüz') {
    msg.reply('Görüşürüz');
  }
});
client.on('message', msg => {
  if (msg.content === 'ben kaçar') {
    msg.reply('Görüşürüz');
  }
});
client.on('message', msg => {
  if (msg.content === 'o!yapımcı') {
    msg.reply('Yapımcım: AgentSLayer, Katkı sağlayanlar: Arda, MemoKK, Mr Felicity, NavMen, AhmetEsad');
  }
});
client.on('message', msg => {
  if (msg.content === 'aq') {
    msg.reply('Küfüretme!');
	msg.delete (msg.content == 'aq')
  }
});
client.on('message', msg => {
  if (msg.content === 'F') {
    msg.reply('Küfüretme!');
	msg.delete (msg.content == 'aq')
  }
});
client.on('message', msg => {
  if (msg.content === 'amk') {
    msg.reply('Küfüretme!');
	msg.delete (msg.content == 'aq')
  }
});

client.on('message', msg => {
  if (msg.content === 'oç') {
    msg.reply('Küfüretme!');
	msg.delete (msg.content == 'oç')
  }
});
client.on('message', msg => {
  if (msg.content === 'fuck') {
    msg.reply('Küfüretme!');
	msg.delete (msg.content == 'fuck')
  }
});
client.on('message', msg => {
  if (msg.content === 'o!yardım') {
    msg.reply('**1. o!yardım => burayı açar o!yardım2 daha düzenli yardım isteyenler için  2. o!simitye => sıcak simit getirir 3. o!simitçay => çay ve simit getirir 4. o!simitkahvaltı => simit ve kahvaltılık getirir 4.5 o!simitfırnla => yeni simitler fırınlar 5. o!güncellemeler => güncellemeleri açar 5.5 o!simitiçli => Beyazpeynirli, domatesli simit getirir 6. o!ekle => botu ekleme linkini atar 6.5 o!ping => pingi gösterir 7. o!mkemal => Atatürk Fotoğrafı 8. o!atatürk => Atatürk fotoğrafı 8,5. o1ismetinönü => Atatürk ve İsmet İnönü nün beraber fotoğrafı 9. o!yapımcı => yapımcıyıgösterir 10. o!simitpizza => simit üzerine ek malzemeler ile yapılmış simit pizaası getirir, mesajlara tepkiler => 1.Küfürü siler ve uyarır 2.Görüşürüz gibi kelimelere tepki verir 3.Selam gibi kelimelere tepki verir. Discord destek sunucumuz => http://discord.gg/9WTHXDj . Şu an beta sürümünde yeni komutlar eklenmeye devam edecek!**');
  }
});
client.on('message', msg => {
  if (msg.content === 'o!yardım2') {
    msg.reply('o!simityardım => Simit komutları o!kişileryardım => Atatürk vb. fotorağflarını gösterme komutları o!yardımekle => bot ekleme linkini komutunu gösterir o!tepkiyardım => tepki özelliklerini o!yapımcıyardım => yapımcıları gösterme komutu o!güncellemeyardım => güncelleme gösterme komutu');
  }
});
client.on('message', msg => {
  if (msg.content === 'o!tepkiyardım') {
    msg.reply('1.Küfür siler 2.Merhaba ,görüşürz vb. tepkiler ekler');
  }
});
client.on('message', msg => {
  if (msg.content === 'o!güncellemeyardım') {
    msg.reply('o!güncellemeler => güncellemeleri gösterir');
  }
});
client.on('message', msg => {
  if (msg.content === 'o!yapımcıyardım') {
    msg.reply('o!yapımcı => yapımcıları gösterir');
  }
});
client.on('message', msg => {
  if (msg.content === 'o!kişileryardım') {
    msg.reply('7. o!mkemal => Atatürk Fotoğrafı 8. o!atatürk => Atatürk fotoğrafı 8,5. o!inönü => Atatürk ve İsmet İnönü nün beraber fotoğrafı');
  }
});
client.on('message', msg => {
  if (msg.content === 'o!simityardım') {
    msg.reply('1. o!yardım => burayı açar 2. o!simitye => sıcak simit getirir 3. o!simitçay => çay ve simit getirir 4. o!simitkahvaltı => simit ve kahvaltılık getirir 5.o!simitfırınla yeni simitler fırınlar 6. o!ping => pingi gösterir 7. o!simitiçli => Beyazpeynirli, domatesli simit getirir 8. o!simitpizza => simit üzerine kaşar peyniri ve ek malzemeler olan simit pizzası getirir.');
  }
});
client.on('message', msg => {
  if (msg.content === 'o!yardımekle') {
    msg.reply('o!ekle => bot ekleme linki');
  }
});
client.on('message', msg => {
  if (msg.content === 'o!simitye') {
    msg.reply('Buyrun sıcak simitiniz');
	const embed = new Discord.RichEmbed().setImage('https://isbh.tmgrup.com.tr/sbh/2016/03/02/650x344/1456852957695.jpg?7403222608820160302020323');
	msg.channel.send(embed);
	
  }
});
client.on('message', msg => {
  if (msg.content === 'o!simitfırınla') {
    msg.reply('Hadi Ankara simitlerini fırınlayalım, müşteri çok!');
	const embed = new Discord.RichEmbed().setImage('http://i.radikal.com.tr/150x113/2015/05/28/201505281429_ankara%20simidi.jpg');
	msg.channel.send(embed);
	
  }
});
client.on('message', msg => {
  if (msg.content === 'o!simitçay') {
    msg.reply('Buyrun simitiniz ve çayınız');
	const embed = new Discord.RichEmbed().setImage('http://i.on5yirmi5.com/image/2011/02/26/91165.jpg');
	msg.channel.send(embed);
	
  }
});
client.on('message', msg => {
  if (msg.content === 'o!simitiçli') {
    msg.reply('Buyrun beyaz peynirli, domatesli simitiniz.');
	const embed = new Discord.RichEmbed().setImage('http://2.bp.blogspot.com/-l9JSima3EG8/VLOCS9ePH1I/AAAAAAAAAkc/0gXpZ-MlSMo/s1600/images.jpg');
	msg.channel.send(embed);
	
  }
});
client.on('message', msg => {
  if (msg.content === 'o!simitpizza') {
    msg.reply('Buyrun simit pizzanız');
	const embed = new Discord.RichEmbed().setImage('http://cdn.yemek.com/mncrop/940/625/uploads/2016/09/dolgulu-kasarli-simit.jpg');
	msg.channel.send(embed);
	
  }
});
client.on('message', msg => {
  if (msg.content === 'o!simitkahvaltı') {
    msg.reply('Buyrun simitiniz ve kahvaltılığınız');
	const embed = new Discord.RichEmbed().setImage('http://www.misbasak.com.tr/assets/img/upload/urunler/borek4.jpg');
	msg.channel.send(embed);
	
  }
});
client.on('message', msg => {
  if (msg.content === 'o!mkemal') {
    msg.reply('Baş Komutan Mustafa Kemal Atatürk');
	const embed = new Discord.RichEmbed().setImage('https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-514468.png');
	msg.channel.send(embed);
	
  }
});
client.on('message', msg => {
  if (msg.content === 'o!atatürk') {
    msg.reply('Baş Komutan Mustafa Kemal Atatürk');
	const embed = new Discord.RichEmbed().setImage('http://i.hizliresim.com/LyodyJ.jpg');
	msg.channel.send(embed);
	
  }
});
client.on('message', msg => {
  if (msg.content === 'o!inönü') {
    msg.reply('Atatürk ve İsmet İnönü');
	const embed = new Discord.RichEmbed().setImage('https://i.pinimg.com/originals/58/d0/1e/58d01e3d39170d84d3d09ef5d0d03624.jpg');
	msg.channel.send(embed);
	
  }
});
client.on('message', msg => {
  if (msg.content === 'o!güncellemeler') {
    msg.reply('o!simitfırınla geldi, o!yardım2 ile daha düzenli yardım menüsü özelliği geldi,yeni simit çeşitleri geldi örneğin, o!simitiçli, o!ping ile ping ölçme geldi.');
	
	
  }
});


client.login(process.env.BOT_TOKEN);
