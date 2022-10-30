import User from './models/User.model.mjs';
import Sequelize from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';

const db = {};

let sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.PG_HOST ?? 'localhost',
    dialect: 'postgres'
});

const umzug = new Umzug({
    migrations: { glob: 'db/migrations/*.js' },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
});

await umzug.up();

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

export default db;
