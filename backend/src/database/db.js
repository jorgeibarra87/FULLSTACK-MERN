import { Sequelize } from "sequelize";

export const db = new Sequelize(
    'task_app',
    'jorgeibarra',
    'jorgeibarra',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);