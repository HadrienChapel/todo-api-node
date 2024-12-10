import { Request, Response } from "express";
import Task from "../models/taskModel";

export const getTasks = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const tasks = await Task.findAll({ where: { userId } });
  res.json(tasks);
};

export const addTask = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const { title } = req.body;
  const task = await Task.create({ title, userId });
  res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed } = req.body;
  await Task.update({ completed }, { where: { id } });
  res.status(200).json({ message: "Task updated" });
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Task.destroy({ where: { id } });
  res.status(200).json({ message: "Task deleted" });
};
