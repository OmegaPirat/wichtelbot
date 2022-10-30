'use strict';

import Sequelize, { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {

        }
    }
    User.init({
        id: {
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            type: Sequelize.UUID,
        },
        userId: DataTypes.STRING,
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
