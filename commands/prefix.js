module.exports = {
  name: 'prefix',
  description: 'Replies with the prefix',
  execute(api, event, args, prefix) { // Add prefix as a parameter
    try {
      api.sendMessage(`Awalan saat ini adalah: ${prefix}`, event.threadID);
    } catch (error) {
      console.error('Kesalahan saat menjalankan perintah:', error);
      api.sendMessage('Terjadi kesalahan saat menjalankan perintah.', event.threadID);
    }
  },
};
