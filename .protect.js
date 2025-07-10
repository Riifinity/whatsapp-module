// .protect.js
try {
    const fs = require('fs');
    const path = require('path');

    // Cek apakah InfoRiifinity.js tersedia
    const infoFile = path.join(__dirname, 'InfoRiifinity.js');
    if (!fs.existsSync(infoFile)) {
        throw new Error("File InfoRiifinity.js tidak ditemukan.");
    }

    // Cek isi file utama index.js
    const mainScriptPath = path.join(process.cwd(), 'main.js'); // Ganti sesuai nama utama kamu jika beda
    if (!fs.existsSync(mainScriptPath)) {
        throw new Error("File main.js tidak ditemukan di root project.");
    }

    const mainScript = fs.readFileSync(mainScriptPath, 'utf-8');

    // Validasi pemanggilan fungsi dan require
    if (!mainScript.includes('await infoRiifinity')) {
        throw new Error("Creadit Riifinity Telah Dihapus ( JANGAN HAPUS CREADIT !!).");
    }

    if (!mainScript.includes("require('./node_modules/riifinity/InfoRiifinity.js')")) {
        throw new Error("Creadit Riifinity Telah Dihapus ( JANGAN HAPUS CREADIT !!).");
    }

} catch (err) {
    throw new Error(`âŒ Riifinity Security Terdeteksi ( Terjadi Penghapusan Creadit !!!):\n${err.message}`);
}
