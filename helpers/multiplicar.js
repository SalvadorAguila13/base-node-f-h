const fs = require("fs");
const colors = require('colors')
console.clear();

const crearArchivo = async(base = 5, listar, rango) => {
  try {
        let salida = "";
        for (let i = 1; i <= rango; i++) {
          salida += `${base} X ${i} = ${base * i}\n`;
        }
        
        if (!listar) {
          return null
        }
        console.log(salida)
      
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado`
        
      } catch (error) {
        throw error
      }
    };

module.exports = crearArchivo;
