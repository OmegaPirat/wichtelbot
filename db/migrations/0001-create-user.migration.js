const Sequelize = require('sequelize');

async function up({ context: queryInterface }) {
    await queryInterface.createTable('Users', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        userId: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    });
}

async function down({ context: queryInterface }) {
    await queryInterface.dropTable('Users');
}

module.exports = { up, down };
