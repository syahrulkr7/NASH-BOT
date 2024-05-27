module.exports = {
  name: 'mention',
  description: 'Responds when "arul," "pina," or "rul" is mentioned',
  nashPrefix: false,
  execute(api, event, args) {
    const message = event.body.toLowerCase();
    if (message.includes('arul') || message.includes('pina') || message.includes('rul')) {
      api.sendMessage("Jangan panggil tuanku, kawan", event.threadID, event.messageID);
    }
  },
};
