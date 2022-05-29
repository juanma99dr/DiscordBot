"use strict";
const {
    Client,
    Intents
} = require('discord.js');
require("dotenv").config();
const i18n = require('i18n');
const config = require('./config.json');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

client.once('ready', () => {
    console.log('Ready!');
});

client.on("interactionCreate", async interaction => {
            if (!interaction.isCommand()) return

            const {commandName} = interaction

            if (commandName == "ping") {
                await interaction.reply("pong")
            }
        })

        //client.login(process.env.token);
        client.login(config.token);