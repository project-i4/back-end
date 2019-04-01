'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
          */
        return queryInterface.bulkInsert('users', [

            {
                "name": "Ayman ",
                "hashed_password": "123456",
                "email": "ayman@gmail.com",
                "address": "Riyadh",
                "created_at": new Date(),
                "updated_at": new Date()

            },
            {
                "name": "Ahmad ",
                "hashed_password": "123456",
                "email": "Ahmad@gmail.com",
                "address": "Tokyo",
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Abdullah ",
                "hashed_password": "123456",
                "email": "Abdullah@gmail.com",
                "address": "Amsterdam",
                "created_at": new Date(),
                "updated_at": new Date()

            },
            {
                "name": "Rami ",
                "hashed_password": "123456",
                "email": "Rami@gmail.com",
                "address": "Jeddah",
                "created_at": new Date(),
                "updated_at": new Date()  
            },
            {
                "name": "David ",
                "hashed_password": "123456",
                "email": "David@gmail.com",
                "address": "London",
                "created_at": new Date(),
                "updated_at": new Date()
            },
            {
                "name": "Hamad ",
                "hashed_password": "123456",
                "email": "Hamad@gmail.com",
                "address": "Qassim",
                "created_at": new Date(),
                "updated_at": new Date()
            }

        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          */
        return queryInterface.bulkDelete('users', null, {});
    }
};

