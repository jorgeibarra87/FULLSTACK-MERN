import { DataTypes } from "sequelize";
import { db } from "../database/db.js";

export const Task = db.define("Task", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.STRING,
    }
});