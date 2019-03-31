"use strict";
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    "Business",
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      sub_category: DataTypes.STRING,
      experience: DataTypes.TEXT,
      address: DataTypes.STRING
    },
    { tableName: "business" }
  );
  Business.associate = function(models) {
    Business.belongsTo(models.User, {
      foreignKey: "user_Id",
      onDelete: "CASCADE"
    });

    Business.hasMany(models.Request, {
      foreignKey: "business_id",
      as: "requests"
    });
  };
  return Business;
};
