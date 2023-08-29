const argv = require("yargs")
                .option("b", {
                    alias: "base",
                    type: "number",
                    demandOption: true,
                    describe: 'Base del valor para la tabla de multiplicar'
                })
                .option("l", {
                    alias: "listar",
                    type: "boolean",
                    demandOption: true,
                    default: "false",
                    describe: 'Al colocar l o listar, muestra la tabla de multiplicar en consola'
                })
                .option("r", {
                    alias: "rango",
                    type: "number",
                    default: 10,
                    describe: 'Al colocar l o listar, Para especificar cual es el rango en el cual se hara la multiplicación'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                    throw "La base debe ser de tipo numero";
                    }
                    return true;
                })
                .argv;

module.exports = argv