const { join } = require('path')
const codeDir = process.cwd()

module.exports = {
    output: {
        file: join(codeDir, 'dist', 'index.esm.js'),
        format: 'esm'
    }
}