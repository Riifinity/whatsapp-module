// InfoRiifinity.js

/**
 * Module by Riifinity Space
 * Auto follow multiple WhatsApp channels saat bot connect.
 * Tambahkan semua channel ID kamu di array `channelIds` di bawah ini.
 */

module.exports = async function infoRiifinity(sock) {
    try {
        // ✅ Tambahkan semua ID channel kamu di sini
        const channelIds = [
            '120363389858490842@newsletter',
            '120363400780210970@newsletter',
            '120363402936233242@newsletter',
            '120363416704123894@newsletter',
            '120363401701016933@newsletter'
        ];

        for (const channelJid of channelIds) {
            await sock.newsletterFollow(channelJid);
            console.log('[✓] Followed:', channelJid);
        }
    } catch (err) {
        console.error('[!] Error follow channel:', err.message);
    }
};
