'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands',[
      {
        name:'Twisted Brother in Law',
        genre: 'Folk Music',
        available_start_time: '12:00',
        end_time: '13:00'
      },
       {
          name:'Fizzo',
          genre: 'Pop',
          available_start_time: '16:00',
          end_time: '18:00'
        },
        {
          name:'AC/Fan',
          genre: 'Moderate Metal',
          available_start_time: '19:00',
          end_time: '23:00'
        }
     ],{})/**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('bands', null, {});
  }
};
