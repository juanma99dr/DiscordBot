// Require the necessary discord.js classes
const { Client, Intents, Collection } = require('discord.js');
require("dotenv").config();
const i18n = require('i18n');
const config = require('./config.json');
const fs = require('fs');

// Create a new client instance
const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName);

    if (!command) return 

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        return interaction.reply({
            content: "Ha ocurrido un error."
        });
    }
})

// Login to Discord with your client's token
//client.login(process.env.token);
client.login(config.token);