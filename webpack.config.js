const path = require('path');

module.exports = {
    entry: './src/bundle-extra.js',
    output: {
        filename: 'Leaflet.VectorGrid.bundled.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
};