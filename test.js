const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// Cambia esto según tu archivo y versión
const filePath = 'dist/AAKSLauncher-instalador-2.0.0.exe'; // Ruta al archivo generado
const version = '2.0.1'; // Versión del archivo

// Función para calcular el hash sha512
function calculateSha512(filePath) {
    const data = fs.readFileSync(filePath);
    return crypto.createHash('sha512').update(data).digest('base64');
}a

// Función para obtener el tamaño del archivo
function getFileSize(filePath) {
    const stats = fs.statSync(filePath);
    return stats.size;
}

// Generar el archivo latest.yml
function generateLatestFile() {
    const sha512 = calculateSha512(filePath);
    const size = getFileSize(filePath);
    const fileName = path.basename(filePath);
    const releaseDate = new Date().toISOString();

    const latestData = {
        version: version,
        files: [
            {
                url: fileName,
                sha512: sha512,
                size: size,
            },
        ],
        path: fileName,
        sha512: sha512,
        releaseDate: releaseDate,
    };

    // Convertir a YAML
    const yaml = `version: ${latestData.version}
files:
  - url: ${latestData.files[0].url}
    sha512: ${latestData.files[0].sha512}
    size: ${latestData.files[0].size}
path: ${latestData.path}
sha512: ${latestData.sha512}
releaseDate: '${latestData.releaseDate}'`;

    // Guardar en latest.yml
    fs.writeFileSync('dist/latest.yml', yaml, 'utf8');
    console.log('Archivo latest.yml generado correctamente.');
}

// Ejecutar la generación
generateLatestFile();
