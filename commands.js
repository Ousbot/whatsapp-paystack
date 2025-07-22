module.exports = {
    handleCommand: async (message, sendMessage) => {
        const text = message.text.toLowerCase();

        switch (text) {
            case 'start':
                await sendMessage('🤖 Bot Activated! Type any of the commands below:');
                await sendMessage(
                    `📝 Available Commands:
1. fake typing
2. fake recording
3. autoreact ❤️
4. view status
5. antidelete`
                );
                break;

            case 'fake typing':
                await sendMessage('_Typing..._', 3000); // Simulate typing delay
                await sendMessage('✅ Done pretending to type.');
                break;

            case 'fake recording':
                await sendMessage('_Recording voice..._', 3000); // Simulate recording delay
                await sendMessage('✅ Done pretending to record.');
                break;

            case 'autoreact ❤️':
                await sendMessage('❤️ Auto reaction sent.');
                break;

            case 'view status':
                await sendMessage('👀 All contacts’ statuses have been viewed (simulated).');
                break;

            case 'antidelete':
                await sendMessage('🛡️ Anti-delete is now ON. Deleted messages will be recovered.');
                break;

            default:
                await sendMessage("❌ Unknown command. Type 'start' to see available commands.");
        }
    }
};
