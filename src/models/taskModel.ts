import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";

class Task extends Model {
  id!: number;
  title!: string;
  completed!: boolean;
  userId!: number;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Task" }
);

export default Task;
