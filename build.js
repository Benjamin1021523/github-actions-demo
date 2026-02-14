const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

const content = `<html><body><h1>Hello from GitHub Actions!</h1><p>最後更新時間：${new Date().toLocaleString()}</p></body></html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), content);
console.log('編譯完成！檔案已生成在 dist/ 資料夾。');