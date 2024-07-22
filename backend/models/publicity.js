"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Publicity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Publicity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "id",
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "name",
      },
      path: {
        type: DataTypes.STRING(250),
        allowNull: false,
        field: "path",
      },
      localPath: {
        type: DataTypes.STRING(250),
        allowNull: false,
        field: "localPath",
      },
    },
    {
      sequelize,
      modelName: "Publicity",
    }
  );
  return Publicity;
};
