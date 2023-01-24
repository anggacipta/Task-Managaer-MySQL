import { Sequelize } from 'sequelize';
import db from '../db/connect.js';

const { DataTypes } = Sequelize;

const Db = db.define(
  'task',
  {
    name: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
  }
);

export default Db;

(async () => {
  await db.sync({ alter: true });
})();
