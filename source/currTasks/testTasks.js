import { Task } from './../skyTasks.js';

const first = new Task('Sarcasm Seminar', Task.getUniqueUID(), 2, new Date('June 15, 2023 12:00:00'));
first.data.ddl = new Date('June 17, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
first.data.duration = 3;
first.data.priority = 5;
first.addToLocalStorage();

const second = new Task('"ITS SO COLD OUTSIDE" man if u dont shut up...', Task.getUniqueUID(), 7, new Date('June 4, 2023 08:00:00'));
second.data.ddl = new Date('June 7, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
second.data.duration = 3;
second.data.priority = 5;
second.addToLocalStorage();

const third = new Task('Why Did My Mother Want to Abort Me? :(', Task.getUniqueUID(), 7, new Date('June 25, 2023 15:00:00'));
third.data.ddl = new Date('June 26, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
third.data.duration = 1;
third.data.priority = 5;
third.addToLocalStorage();

const fourth = new Task('Make Shroom-I mean First Person Tablet Order', Task.getUniqueUID(), 7, new Date('June 19, 2023 12:00:00'));
fourth.data.ddl = new Date('June 20, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
fourth.data.duration = 1;
fourth.data.priority = 5;
fourth.addToLocalStorage();

const fifth = new Task('YOUR BIG DAY!', Task.getUniqueUID(), 7, new Date('June 18, 2023 00:00:00'));
fifth.data.ddl = new Date('June 19, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
fifth.data.duration = 24;
fifth.data.priority = 5;
fifth.addToLocalStorage();

const sixth = new Task('stupid earlence final gmfu!!!', Task.getUniqueUID(), 7, new Date('June 12, 2023 15:00:00'));
sixth.data.ddl = new Date('June 12, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
sixth.data.duration = 3;
sixth.data.priority = 5;
sixth.addToLocalStorage();

const main = new Task('CLICK ME!', Task.getUniqueUID(), 13, new Date('June 27, 2023 12:00:00'))
main.data.ddl = new Date('June 28, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
main.data.duration = 1;
main.data.priority = 2;
main.addToLocalStorage();

//Task.schedule();