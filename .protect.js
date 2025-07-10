
// .protect.js (versi aman & tidak auto-run)
try {
    const follow = require('./InfoRiifinity.js');
    if (typeof follow !== 'function') {
        throw new Error("🚫 InfoRiifinity.js tidak valid");
    }
} catch (err) {
    throw new Error(`❌ Riifinity Security Blocked:\n${err.message}`);
}

