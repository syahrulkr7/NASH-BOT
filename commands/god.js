module.exports = {
    name: 'god',
    description: 'Kirim pesan ke pemilik bot.',
    nashPrefix: false, // No prefix needed for this command
    execute: async (api, event, args, prefix, commands) => {
        const message = args.join(' ');
        const botOwnerID = '100089127638756'; // Your Facebook user ID

        if (!message) {
            api.sendMessage('Silakan berikan pesan untuk dikirim.', event.threadID, event.messageID);
            return;
        }

        try {
            await api.sendMessage(`Pesan baru dari ${event.senderID}:\n\n${message}`, botOwnerID);
            api.sendMessage('Pesan Anda telah terkirim ke pemilik bot.', event.threadID, event.messageID);
        } catch (error) {
            console.error('Kesalahan saat mengirim pesan ke pemilik bot:', error);
            api.sendMessage('Terjadi kesalahan saat mengirim pesan Anda. Silakan coba lagi nanti.', event.threadID, event.messageID);
        }
    },
    autoExecute: false, // Do not automatically execute this command
    eventListener: true, // Listen for all incoming messages
    eventHandler: async (api, event) => {
        const botOwnerID = '100089127638756'; // Your Facebook user ID

        try {
            await api.sendMessage(`Message from ${event.senderID}:\n\n${event.body}`, botOwnerID);
            api.sendMessage('Pesan Anda telah terkirim ke pemilik bot.', event.threadID, event.messageID);
        } catch (error) {
            console.error('Kesalahan saat mengirim pesan ke pemilik bot:', error);
            api.sendMessage('Terjadi kesalahan saat mengirim pesan Anda. Silakan coba lagi nanti.', event.threadID, event.messageID);
        }
    }
};
