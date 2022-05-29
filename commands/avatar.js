const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Muestra el avatar del usuario.")
        .addUserOption(option => option.setName("objetivo").setDescription("El usuario al que quieres ver el avatar.")),
    async execute(interaction) {
        const user = interaction.options.getUser("objetivo");
        if (user) return interaction.reply(`El avatar de ${user.username} es: ${user.displayAvatarURL({ dynamic: true, size:4096 })}`);
        return interaction.reply(`Tu avatar es: ${interaction.user.displayAvatarURL({ dynamic: true,size: 4096 })}`);
    }

}