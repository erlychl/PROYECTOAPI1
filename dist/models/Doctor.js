"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// modulo
//conexion de la bd
var Doctor = _database.sequelize.define('doctors', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nomdoctor: {
    type: _sequelize["default"].STRING(100),
    allowNull: false
  },
  apelldoctor: {
    type: _sequelize["default"].STRING(100),
    allowNull: false
  },
  dnidoctor: {
    type: _sequelize["default"].STRING(8),
    allowNull: false
  },
  teldoctor: {
    type: _sequelize["default"].STRING(12),
    allowNull: false
  },
  emaildoctor: {
    type: _sequelize["default"].STRING(50),
    allowNull: false
  },
  dirdoctor: {
    type: _sequelize["default"].STRING(100),
    allowNull: false
  },
  espdoctor: {
    type: _sequelize["default"].STRING(100),
    allowNull: false
  },
  clinicaid: {
    type: _sequelize["default"].INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

var _default = Doctor;
exports["default"] = _default;