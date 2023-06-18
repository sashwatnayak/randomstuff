import { Task } from './../skyTasks.js';

const first = new Task('second', Task.getUniqueUID(), 2, new Date());
first.data.ddl = new Date('November 23, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
first.data.duration = 1;
first.data.priority = 5;
first.addToLocalStorage();

const second = new Task('damn', Task.getUniqueUID(), 7, new Date('June 4, 2023 23:59:00'));
second.data.ddl = new Date('June 7, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
second.data.duration = 1;
second.data.priority = 5;
second.addToLocalStorage();

Task.schedule();