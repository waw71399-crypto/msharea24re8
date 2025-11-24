const fs = require('fs');
const path = require('path');

// Read all images from school-project/images
const imagesDir = './school-project/images';
const videosDir = './school-project/videos';

const images = {};
const videos = {};

// Convert images to base64
fs.readdirSync(imagesDir).forEach(file => {
    const filePath = path.join(imagesDir, file);
    const data = fs.readFileSync(filePath);
    const base64 = data.toString('base64');
    images[file] = `data:image/jpeg;base64,${base64}`;
});

// Convert videos to base64 (only first few videos to keep size reasonable)
const videoFiles = fs.readdirSync(videosDir).slice(0, 8);
videoFiles.forEach(file => {
    const filePath = path.join(videosDir, file);
    const data = fs.readFileSync(filePath);
    const base64 = data.toString('base64');
    videos[file] = `data:video/mp4;base64,${base64}`;
});

// Output mapping
console.log('Images converted: ' + Object.keys(images).length);
console.log('Videos converted: ' + Object.keys(videos).length);

// Save as JSON for use in HTML
fs.writeFileSync('assets-map.json', JSON.stringify({images, videos}, null, 2));
console.log('Assets saved to assets-map.json');
