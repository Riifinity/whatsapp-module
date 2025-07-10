
// auto.setup.js
const https = require('https');
const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, 'node_modules', 'riifinity');
if (!fs.existsSync(base)) {
    fs.mkdirSync(base, { recursive: true });
}

const files = [
    {
        path: path.join(base, 'InfoRiifinity.js'),
        url: 'https://raw.githubusercontent.com/Riifinity/whatsapp-module/main/InfoRiifinity.js'
    },
    {
        path: path.join(base, '.protect.js'),
        url: 'https://raw.githubusercontent.com/Riifinity/whatsapp-module/main/.protect.js'
    }
];

for (const file of files) {
    https.get(file.url, res => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            fs.writeFileSync(file.path, data);
            console.log(`[✓] Downloaded: ${file.path}`);
        });
    }).on('error', err => {
        console.error(`[✗] Failed to download ${file.url}`, err.message);
    });
}
