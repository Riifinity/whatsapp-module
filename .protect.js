
// .protect.js
try {
    if (typeof downloadInfoModule !== 'function') {
        throw new Error("🔥 downloadInfoModule tidak ditemukan ");
    }

    const follow = require('./InfoRiifinity.js');
    if (typeof follow !== 'function') {
        throw new Error("InfoRiifinity.js tidak valid atau rusak");
    }
} catch (err) {
    throw new Error(`❌ Riifinity Security Blocked:\n${err.message}`);
}
