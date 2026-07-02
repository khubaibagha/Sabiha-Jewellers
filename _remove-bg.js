const { Jimp } = require('jimp');
const path = require('path');

const src = path.join(__dirname, 'Images', 'logo-sabihas.jpeg');
const dst = path.join(__dirname, 'Images', 'logo-sabihas.png');

(async () => {
  const img = await Jimp.read(src);
  const { width, height, data } = img.bitmap;
  for (let idx = 0; idx < data.length; idx += 4) {
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    if (r > 220 && g > 215 && b > 205) data[idx+3] = 0;
  }
  await img.write(dst);
  console.log('Done:', dst);
})();
