import Task from '../models/tasks.js';

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json({
      tasks: tasks,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      task,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTask = async (req, res, next) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({
      where: {
        id: taskId,
      },
    });
    if (!task) {
      return next(`No task with find with ${taskId}`);
    }

    res.status(200).json({
      task,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.destroy({
      where: {
        id: taskId,
      },
    });
    if (!task) {
      return next(`No task find with id ${taskId}`);
    }

    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id: taskId } = req.params;
    const name = req.body;
    const task = await Task.update(name, {
      where: {
        id: taskId,
      },
    });
    if (!task) {
      return next(`No task find with id ${taskId}`);
    }

    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
  }
};
