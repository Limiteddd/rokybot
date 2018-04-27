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
    if (message.content === 'pofon') {
    	message.reply('Engem nem is pofozott fel. :open_mouth:');
  	}
     if (message.content === 'lagg') {
    	message.reply('vájá belaggoltam');
  	}
     if (message.content === 'mérges') {
    	message.reply('Hát szerintem csak te vagy az,te autista balfasz.');
  	}
    if (message.content === 'mérges?') {
    	message.reply('Hát szerintem csak te vagy az,te autista balfasz.');
  	}
    if (message.content === 'gergő') {
    	message.reply('szia');
  	}
     if (message.content === 'miért haltál meg?') {
    	message.reply('Editbug.');
  	}
    if (message.content === 'roky') {
    	message.reply('Forrás:Wikipédia. Roky egy koraszülött agybajos autista csoport. Általában 10 évesen elhunynak de a full kretének életbe maradnak 15 évig is.');
  	}
     if (message.content === 'amúgy ádám') {
    	message.reply(':kussolj már cryface senkit nem érdekelsz');
  	}
      if (message.content === 'dagadt') {
    	message.reply('geci');
  	}
     if (message.content === 'macska') {
    	message.reply('fasz');
  	}
     if (message.content === 'owááá') {
    	message.reply('méjbi itsz dö szádzönláááj,méjbi itsz dö vőrdz gon lájj');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
