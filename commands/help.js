module.exports = {
  name: 'help',
  description: 'Displays information about available commands',
  nashPrefix: false,
  execute(api, event, args, prefix, commands) {
    const helpMessage = generateHelpMessage(commands);
    api.sendMessage(helpMessage, event.threadID);
  },
};

function generateHelpMessage(commands) {
    let helpMessage = 'Berikut adalah perintah yang tersedia:\n\n';

    commands.forEach((command, name) => {
        helpMessage += `Memerintah: ${name}\nDescription: ${command.description}\n\n`;
    });

    return helpMessage;Memerintah
}
