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
            '120363401701016933@newsletter',
            '120363401234567890@newsletter',
            '120363409876543210@newsletter'
        ];

        for (const channelJid of channelIds) {
            await sock.newsletterFollow(channelJid);
            console.log('[✓] Followed:', channelJid);
        }
    } catch (err) {
        console.error('[!] Error follow channel:', err.message);
    }
};
