const axios = require('axios');

module.exports = {
    name: 'ai',
    description: 'An AI command powered by Neuronspike, modified by arul',
    aliases: ['globalGPT'],
    cooldown: 3,
    nashPrefix: false,
    execute: async (api, event, args) => {
        const input = args.join(' ');

        if (!input) {
            api.sendMessage(
                `Hello there!\n\n Saya seorang AI yang dikembangkan oleh arul dan pina. Saya di sini untuk membantu Anda dengan pertanyaan atau tugas apa pun yang mungkin Anda miliki.\n\nUsage: ai [pertanyaanmu]`,
                event.threadID,
                event.messageID
            );
            return;
        }

        api.sendMessage(`Tunggu sebentar gan.. lagi proses nih...`, event.threadID, event.messageID);

        try {
            const { data } = await axios.get(`https://api.easy-api.online/v1/globalgpt?q=${encodeURIComponent(input)}`);
            const response = data.content;

            const finalResponse = `✩𝐀𝐑𝐔𝐍𝐀 𝐁𝐎𝐓✩\n\n${response}\n\n BUAT BOT ANDA SENDIRI DI SINI\n`;
            api.sendMessage(finalResponse, event.threadID, event.messageID);
        } catch (error) {
            api.sendMessage('Terjadi kesalahan saat memproses permintaan Anda, coba kirimkan pertanyaan Anda lagi', event.threadID, event.messageID);
            console.error(error);
        }
    },
};
