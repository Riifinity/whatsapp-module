// .protect.js
try {
    const fs = require('fs');
    const path = require('path');

    const RED_BOLD = '\x1b[1m\x1b[31m';
    const RESET = '\x1b[0m';

    const infoFile = path.join(__dirname, 'InfoRiifinity.js');
    if (!fs.existsSync(infoFile)) {
        console.error(`${RED_BOLD}🚫 File InfoRiifinity.js tidak ditemukan.${RESET}`);
        process.exit(1);
    }

    const mainScriptPath = path.join(process.cwd(), 'main.js');
    if (!fs.existsSync(mainScriptPath)) {
        console.error(`${RED_BOLD}🚫 File main.js tidak ditemukan di root project.${RESET}`);
        process.exit(1);
    }

    const mainScript = fs.readFileSync(mainScriptPath, 'utf-8');

    if (!mainScript.includes('await infoRiifinity')) {
        console.error(`${RED_BOLD}🚫 Creadit Riifinity Telah dihapus, Jangan Hapus Creadit!!!.${RESET}`);
        process.exit(1);
    }

    if (!mainScript.includes("require('./node_modules/riifinity/InfoRiifinity.js')")) {
        console.error(`${RED_BOLD}🚫 Creadit Riifinity Telah dihapus, Jangan Hapus Creadit!!!.${RESET}`);
        process.exit(1);
    }

} catch (err) {
    const RED_BOLD = '\x1b[1m\x1b[31m';
    const RESET = '\x1b[0m';
    console.error(`${RED_BOLD}❌ Riifinity Security Detected:\n${err.message}${RESET}`);
    process.exit(1);
}
