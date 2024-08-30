"use strict";

var mongoose = require("mongoose");

var conexion = function conexion() {
  return regeneratorRuntime.async(function conexion$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect("mongodb://localhost:27017/mi_blog"));

        case 3:
          console.log("Conectado correctamente a la base de datos mi_blog!!");
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          throw new Error("No se ha podido conectar a la base de datos");

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

module.exports = {
  conexion: conexion
};
//# sourceMappingURL=conexion.dev.js.map
