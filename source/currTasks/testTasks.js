import { Task } from './../skyTasks.js';

const first = new Task('first', Task.getUniqueUID(), 2, new Date());
first.data.ddl = new Date('November 23, 2022 23:59:00');  // Deadline: November 23nd, 11:59pm 
first.data.duration = 1;
first.data.priority = 5;
first.addToLocalStorage();

Task.schedule();