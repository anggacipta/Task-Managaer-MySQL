import sequelize from 'sequelize';

const db = new sequelize('tasks_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
