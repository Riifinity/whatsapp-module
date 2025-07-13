// .protect.js
global._x0Z1q_ = true;

try {
    const fs = require('fs');
    const path = require('path');

    const RED_BOLD = '\x1b[1m\x1b[31m';
    const RESET = '\x1b[0m';

    const infoFile = path.join(__dirname, 'InfoRiifinity.js');
    if (!fs.existsSync(infoFile)) {
        console.log(`\n${RED_BOLD}Riifinity Security Detected🔥 :\n${RESET}`);
        console.error(`${RED_BOLD}🚫 File InfoRiifinity.js tidak ditemukan.${RESET}`);
        process.exit(1);
    }

    const mainScriptPath = path.join(process.cwd(), 'main.js');
    if (!fs.existsSync(mainScriptPath)) {
        console.log(`\n${RED_BOLD}Riifinity Security Detected🔥 :\n${RESET}`);
        console.error(`${RED_BOLD}🚫 File main.js tidak ditemukan di root project.${RESET}`);
        process.exit(1);
    }

    const mainScript = fs.readFileSync(mainScriptPath, 'utf-8');

    if (!mainScript.includes('await infoRiifinity')) {
        console.log(`\n${RED_BOLD}Riifinity Security Detected🔥 :\n${RESET}`);
        console.error(`${RED_BOLD}🚫 Creadit Riifinity Telah Dihapus${RESET}`);
        console.error(`${RED_BOLD}Jangan Hapus Creadit !!!${RESET}`);
        console.error(`${RED_BOLD}Kembalikan Seperti Semula Agar Tidak Error !!!${RESET}`);
        process.exit(1);
    }

    if (!mainScript.includes("const infoRiifinity = require")) {
        console.log(`\n${RED_BOLD}Riifinity Security Detected🔥 :\n${RESET}`);
        console.error(`${RED_BOLD}🚫 Creadit Riifinity Telah Dihapus${RESET}`);
        console.error(`${RED_BOLD}Jangan Hapus Creadit !!!${RESET}`);
        console.error(`${RED_BOLD}Kembalikan Seperti Semula Agar Tidak Error !!!${RESET}`);
        process.exit(1);
    }

    // === CEK require tampilan.js ===
    if (!mainScript.includes("const { showBanner } = require")) {
        console.log(`\n${RED_BOLD}Riifinity Security Detected🔥 :\n${RESET}`);
        console.error(`${RED_BOLD}🚫 Creadit Riifinity Telah Dihapus${RESET}`);
        console.error(`${RED_BOLD}Jangan Hapus Creadit !!!${RESET}`);
        console.error(`${RED_BOLD}Kembalikan Seperti Semula Agar Tidak Error !!!${RESET}`);
        process.exit(1);
    }

    // === CEK showBanner() dipanggil ===
    if (!mainScript.includes("showBanner()")) {
        console.log(`\n${RED_BOLD}Riifinity Security Detected🔥 :\n${RESET}`);
        console.error(`${RED_BOLD}🚫 Creadit Riifinity Telah Dihapus${RESET}`);
        console.error(`${RED_BOLD}Jangan Hapus Creadit !!!${RESET}`);
        console.error(`${RED_BOLD}Kembalikan Seperti Semula Agar Tidak Error !!!${RESET}`);
        process.exit(1);
    }

} catch (err) {
    const RED_BOLD = '\x1b[1m\x1b[31m';
    const RESET = '\x1b[0m';
    console.log(`\n${RED_BOLD}Riifinity Security Detected🔥 :\n${RESET}`);
    console.error(`${RED_BOLD}❌ Riifinity Security Blocked:${RESET}`);
    console.error(`${RED_BOLD}${err.message}${RESET}`);
    process.exit(1);
}
