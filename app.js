import express from 'express';

import tasksRoute from './routes/tasks.js';
import notFound from './middleware/not-found.js';

const app = express();

// JSON
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasksRoute);

app.use(notFound);

const start = async () => {
  try {
    app.listen(5000);
  } catch (error) {
    console.log(error);
  }
};

start();
