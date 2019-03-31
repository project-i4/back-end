'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('business', [{
        name: 'John Doe',
        isBetaMember: false
        
      }], {});
    */
    return queryInterface.bulkInsert('business', [

      {
        "name": "Ayman ",
        "category": "individual",
        "sub_category": "architecture",
        "experience":"five yearse good worker",
        "address": "Riyadh",
        "created_at": new Date(),
        "updated_at": new Date(),
        "user_id":"1"

      },
      {
        "name": "Ahmad ",
        "category": "individual",
        "sub_category": "CivilEngineer",
        "experience": "five yearse good worker",
        "address": "Tokyo",
        "created_at": new Date(),
        "updated_at": new Date(),
        "user_id": "2"
      },
      {
        "name": "Abdullah ",
        "category": "individual",
        "sub_category": "Painter",
        "experience": "five yearse good worker",
        "address": "Amsterdam",
        "created_at": new Date(),
        "updated_at": new Date(),
        "user_id": "3"

      },

    ], {});
  },

  

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('business', null, {});
  }
};
