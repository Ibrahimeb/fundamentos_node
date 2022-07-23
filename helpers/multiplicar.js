const fileSystem = require('fs');
const colors = require('colors')

const createFile = async (base, list, limit) => {
    try {

        let salida = `============================== \n======== Tabla del ${base} ========== \n===============================\n`

        for (let step = 1; step <= limit; step++) {
            salida += `${base} x ${step} = ${base * step}\n`
        }

        const nameFile = colors.green(`tabla_${base}.txt`)

        fileSystem.writeFileSync(`./salida/${nameFile}`, salida)

        if (list == true) {
            console.log(salida)
        }

        return `se creo el archivo ${nameFile} correctamente`
    } catch (error) {
        throw error
    }
}

module.exports = {
    createFile
}

