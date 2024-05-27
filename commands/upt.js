module.exports = {
  name: 'upt',
  description: 'Uptime of the bot',
  author: 'deku', //converted to NashBot
  nashPrefix: false,
  execute(api, event, args, prefix, commands) {
    const uptimeMessage = calculateUptime();
    api.sendMessage(uptimeMessage, event.threadID);
  },
};

function calculateUptime() {
  const time = process.uptime();
  const hours = Math.floor(time / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = Math.floor(time % 60);
  return `Bot sedang berjalan ${hours} jam(s), ${minutes} menit(s), dan ${seconds} detik(s)`;
}
