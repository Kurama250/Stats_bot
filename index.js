/*
Created by Kurama
Github : github.com/Kurama250
Project : Discord stats bot
*/

const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

const channelsToUpdate = [
    { name: 'Members', key: 'members', id: null },
    { name: 'In voice', key: 'voiceMembers', id: null },
    { name: 'Bots', key: 'bots', id: null },
];

client.on('ready', () => {
    console.log(`Bot start in as ${client.user.tag}!`);
    createOrUpdateChannels();
    setInterval(createOrUpdateChannels, config.updateInterval);
});

async function createOrUpdateChannels() {
    const guild = client.guilds.cache.first();
    
    if (!guild) {
        console.log(`No guilds found.`);
        return;
    }
    
    const members = guild.members.cache;
    const voiceMembers = members.filter(member => member.voice.channel);
    const bots = members.filter(member => member.user.bot);

    for (const channelData of channelsToUpdate) {
        const statKey = channelData.key;
        const newStat = statKey === 'members' ? members.size : statKey === 'voiceMembers' ? voiceMembers.size : bots.size;
        
        if (channelData.id === null) {
            const existingChannel = await guild.channels.create(channelData.name, {
                type: 'voice',
                permissionOverwrites: [
                    {
                        id: guild.roles.everyone,
                        deny: ['CONNECT'],
                        allow: ['VIEW_CHANNEL']
                    }
                ]
            });

            channelData.id = existingChannel.id;
            console.log(`Created new channel: ${existingChannel.name}`);
        } else {
            const existingChannel = guild.channels.cache.get(channelData.id);
            const newName = newStat === 0 ? channelData.name : `${channelData.name} - ${newStat}`;
            if (existingChannel && existingChannel.name !== newName) {
                existingChannel.setName(newName).catch(console.error);
                console.log(`Updated channel name: ${existingChannel.name} -> ${newName}`);
            }
        }
    }
}

client.login(config.token);