const fs = require('fs');
const path = require('path');

const png = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);

const assetsDir = path.join(__dirname, '..', 'assets');
const files = [
  'icon.png',
  'splash-icon.png',
  'adaptive-icon.png',
  'favicon.png',
];

fs.mkdirSync(assetsDir, { recursive: true });
for (const file of files) {
  fs.writeFileSync(path.join(assetsDir, file), png);
}

console.log('Placeholder assets created in assets/');
