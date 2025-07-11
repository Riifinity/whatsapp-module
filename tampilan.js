// tampilan.js
const chalk = require("chalk");

function showBanner() {
    console.clear();
    console.log(chalk.cyan.bold('\nloading code....\n'));
    console.log(chalk.red.bold("■□□□□ 20%"));
    console.log(chalk.red.bold("■■□□□ 40%"));
    console.log(chalk.yellow.bold("■■■□□ 60%"));
    console.log(chalk.yellow.bold("■■■■□ 80%"));
    console.log(chalk.green.bold("■■■■■ 100%"));
    console.log(chalk.blue.bold('\nloading selesai'));
    console.log(chalk.blue.bold('tunggu sebentar...'));
    console.clear();

    console.log("██████╗░██╗██╗███████╗██╗███╗░░██╗██╗████████╗██╗░░░██╗ ");
    console.log("██╔══██╗██║██║██╔════╝██║████╗░██║██║╚══██╔══╝╚██╗░██╔╝ ");
    console.log("██████╔╝██║██║█████╗░░██║██╔██╗██║██║░░░██║░░░░╚████╔╝░ ");
    console.log("██╔══██╗██║██║██╔══╝░░██║██║╚████║██║░░░██║░░░░░╚██╔╝░░ ");
    console.log("██║░░██║██║██║██║░░░░░██║██║░╚███║██║░░░██║░░░░░░██║░░░ ");
    console.log("╚═╝░░╚═╝╚═╝╚═╝╚═╝░░░░░╚═╝╚═╝░░╚══╝╚═╝░░░╚═╝░░░░░░╚═╝░░░ ");
    console.log("░██████╗██████╗░░█████╗░░█████╗░███████╗ ");
    console.log("██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝ ");
    console.log("╚█████╗░██████╔╝███████║██║░░╚═╝█████╗░░ ");
    console.log("░╚═══██╗██╔═══╝░██╔══██║██║░░██╗██╔══╝░░ ");
    console.log("██████╔╝██║░░░░░██║░░██║╚█████╔╝███████╗ ");
    console.log("╚═════╝░╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚══════╝");

    console.log('\n\x1b[1m\x1b[35m==== THANKS TO ====\x1b[0m');
    console.log('\x1b[32m✔\x1b[0m ALLAH SWT');
    console.log('\x1b[32m✔\x1b[0m KERUA ORANG TUA');
    console.log('\x1b[32m✔\x1b[0m PEMILIK BASE');
    console.log('\x1b[32m✔\x1b[0m RIIFINITY SPACE');
    console.log('\x1b[32m✔\x1b[0m DEVELOPER BAILEYS');
    console.log('\x1b[32m✔\x1b[0m SUBSCRIBER & PENGGUNA SETIA');
    console.log('\x1b[32m✔\x1b[0m YANG SUDAH SUPPORT PROYEK INI');

    console.log('\x1b[1m\x1b[36m==== KONTAK DEVELOPER ====\x1b[0m');
    console.log('\x1b[33m• YOUTUBE:\x1b[0m youtube.com/@RiifinitySpace');
    console.log('\x1b[33m• WHATSAPP:\x1b[0m wa.me/62895383301627');
    console.log('\x1b[33m• CHANNEL:\x1b[0m https://whatsapp.com/channel/0029VaplrGI0gcfJ7mQknX0E');

    console.log(
        chalk.red.bold(
            'SC INI FREE, JIKA ADA YANG MENJUAL SILAHKAN LAPORKAN KE \n0895383301627\nt.me/asryyi\nJIKA INGIN MENJUAL SCRIPT INI SILAHKAN BUY VER BUYER!!!'
        )
    );
}

module.exports = {
    showBanner
};
