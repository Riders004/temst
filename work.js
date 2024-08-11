const config = require('../../config');
const { anya } = require('../lib');

anya(
    {
        name: 'test',
        alias: ['t'],
        react: '✨',
        need: 'text',
        category: 'Baileys',
        desc: 'Create a group and add an owner',
        cooldown: 8,
        filename: __filename,
    },
    async (anyaV2, pika, { args }) => {
        if (!args[0]) return pika.reply('_❕Enter some text to create!_');
        const text = args.join(' ');
        const group = await anyaV2.groupCreate(text, [config.ownernumber + '@s.whatsapp.net']);
        console.log('Created group with ID:', group);
        pika.reply(`${group.toString()}`);
      //  anyaV2.sendMessage(group.gid, { text: 'Hello there' }); // Say hello to everyone in the group
    }
);
