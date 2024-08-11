const config = require('../../config');
const {
    anya
} = require('../lib');
const axios = require('axios');

//༺─────────────────────────────────────

anya(
        {
            name: "test",
            alias: ['t'],
            react: "✨",
            need: "text",
            category: "Baileys",
            desc: "6o create gc and add owner",
            cooldown: 8,
            filename: __filename
        },
    async (anyaV2, pika, { args }) => {
        if (!args[0]) return pika.reply("_❕Enter some texts to create!_");
        const text = args.join(" ");
        const { key } = await pika.keyMsg("```Creating...```");
        const group = await anyaV2.groupCreate(text, [config.ownernumber + "@s.whatsapp.net"])
        pika.reply(group)
console.log ("created group with id: " + group.gid)
anyaV2.sendMessage(group.id, { text: 'hello there' }) // say hello to everyone on the group
});

//༺─────────────────────────────────────
