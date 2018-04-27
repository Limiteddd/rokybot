const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'cryface') {
    	message.reply('Autista.');
  	}
    if (message.content === 'autista') {
    	message.reply('CryFace.');
  	}
    if (message.content === 'Kibannollak az életből') {
    	message.reply('csak ennyit tudsz hülye autista ');
  	}
    if (message.content === 'bazdmeg roky') {
    	message.reply('háháháháhá autista :smile:');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
