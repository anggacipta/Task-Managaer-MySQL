import express from 'express';
import {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from '../controllers/tasks.js';

const router = express.Router();

router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.delete('/:id', deleteTask);
router.patch('/:id', updateTask);

export default router;
