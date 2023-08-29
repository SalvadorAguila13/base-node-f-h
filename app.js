const argv = require("./config/yargs");
const crearArchivo = require("./helpers/multiplicar");


console.clear();

crearArchivo(argv.b, argv.l, argv.r)
  .then((archivo) => console.log(archivo.rainbow, "creado"))
  .catch((err) => console.log(err));
