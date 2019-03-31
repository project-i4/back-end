"use strict";
module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define(
    "Request",
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
      business_id: DataTypes.INTEGER
    },
    {}
  );
  Request.associate = function(models) {
    // associations can be defined here
    Request.belongsTo(models.User, {
      foreignKey: "user_Id",
      onDelete: "CASCADE"
    });

    Request.belongsTo(models.Business, {
      foreignKey: "business_id",
      onDelete: "CASCADE"
    });
  };
  return Request;
};
