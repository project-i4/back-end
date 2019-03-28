'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    sub_category: DataTypes.STRING,
    experience: DataTypes.TEXT,
    address: DataTypes.STRING
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
  };
  return Business;
};