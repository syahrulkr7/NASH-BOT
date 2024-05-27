const axios = require('axios');

module.exports = {
    name: 'gpt',
    author: 'Rull',//Credit to the Api owner Rui
    description: 'Query GPT-4o for a response.',
    nashPrefix: true,
    execute: async (api, event, args) => {
        const input = args.join(' ');

        if (!input) {
            api.sendMessage('Harap berikan pertanyaan untuk GPT-4o.', event.threadID, event.messageID);
            return;
        }

        try {
            const response = await axios.get(`https://ruiapi.onrender.com/api/gpt4o?q=${encodeURIComponent(input)}`);
            const output = response.data.message;

            api.sendMessage(output, event.threadID, event.messageID);
        } catch (error) {
            console.error('Kesalahan saat menanyakan GPT-4:', error);
            api.sendMessage('Kesalahan terjadi saat memproses permintaan Anda. Silakan coba lagi nanti.', event.threadID, event.messageID);
        }
    }
};
