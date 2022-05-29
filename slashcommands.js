const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [

    new SlashCommandBuilder().setName("ping").setDescription("Pingeame un huevo!")
]
.map(command =>command.toJSON());

const rest = new REST({ version: "9" }).setToken(token);


async function createSlash() {
    try {
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands }
        )

        console.log("Slash commands created!");
    }catch(error) {
        console.error(error);
    }
}

createSlash();
