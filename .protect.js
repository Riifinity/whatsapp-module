
// .protect.js
try {
    const fs = require('fs');
    const path = require('path');

    // Cek apakah InfoRiifinity.js tersedia
    const infoFile = path.join(__dirname, 'InfoRiifinity.js');
    if (!fs.existsSync(infoFile)) {
        throw new Error("🚫 File InfoRiifinity.js tidak ditemukan.");
    }

    // Baca file utama (misalnya main.js atau index.js)
    const mainScript = fs.readFileSync(path.join(process.cwd(), 'main.js'), 'utf-8'); // Ganti dengan index.js jika itu file utama

    // Cek apakah file utama memuat baris pemanggilan fungsi
    if (!mainScript.includes('await infoRiifinity')) {
        throw new Error("🚫 Auto Riifinity Telah Dihapus ( JANGAN HAPUS CREDIT !!!).");
    }

    if (!mainScript.includes("require('./node_modules/riifinity/InfoRiifinity.js')")) {
        throw new Error("🚫 Require Riifinity Telah Dihapus ( JANGAN HAPUS CREDIT !!! ).");
    }

} catch (err) {
    throw new Error(`❌ Riifinity Security Error:\n${err.message}`);
}
