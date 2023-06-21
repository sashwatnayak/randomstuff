import { Task } from './../skyTasks.js';

const first = new Task('Sarcasm Seminar', Task.getUniqueUID(), 2, new Date('June 15, 2023 12:00:00'));
first.data.ddl = new Date('June 17, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
first.data.duration = 3;
first.data.priority = 5;
first.data.category = "personal";
first.addToLocalStorage();

const second = new Task('"ITS SO COLD OUTSIDE" man if u dont shut up...', Task.getUniqueUID(), 7, new Date('June 4, 2023 08:00:00'));
second.data.ddl = new Date('June 7, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
second.data.duration = 1;
second.data.priority = 5;
second.data.category = "personal";
second.addToLocalStorage();

const third = new Task('Why Did My Mother Want to Abort Me? :(', Task.getUniqueUID(), 7, new Date('June 25, 2023 15:00:00'));
third.data.ddl = new Date('June 26, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
third.data.duration = 1;
third.data.priority = 5;
third.data.category = "personal";
third.addToLocalStorage();

const fourth = new Task('Make Shroom-I mean First Person Tablet Order', Task.getUniqueUID(), 7, new Date('June 19, 2023 12:00:00'));
fourth.data.ddl = new Date('June 20, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
fourth.data.duration = 1;
fourth.data.priority = 5;
fourth.data.category = "personal";
fourth.addToLocalStorage();

const fifth = new Task('YOUR BIG DAY!', Task.getUniqueUID(), 7, new Date('June 18, 2023 00:00:00'));
fifth.data.ddl = new Date('June 19, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
fifth.data.duration = 24;
fifth.data.priority = 5;
fifth.data.category = "school";
fifth.addToLocalStorage();

const sixth = new Task('stupid earlence final gmfu!!!', Task.getUniqueUID(), 7, new Date('June 12, 2023 15:00:00'));
sixth.data.ddl = new Date('June 12, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
sixth.data.duration = 3;
sixth.data.priority = 5;
sixth.data.category = "school";
sixth.addToLocalStorage();

const seventh = new Task('time to get baked', Task.getUniqueUID(), 7, new Date('June 3, 2023 08:00:00'));
seventh.data.ddl = new Date('June 4, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
seventh.data.duration = 10;
seventh.data.priority = 5;
seventh.addToLocalStorage();

const eighth = new Task('time to get baked, again!', Task.getUniqueUID(), 7, new Date('June 24, 2023 08:00:00'));
eighth.data.ddl = new Date('June 25, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
eighth.data.duration = 10;
eighth.data.priority = 5;
eighth.addToLocalStorage();

const ninth = new Task('Dude if it wasnt for Om id prolly failed CSE 120', Task.getUniqueUID(), 7, new Date('June 8, 2023 19:00:00'));
ninth.data.ddl = new Date('June 9, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
ninth.data.duration = 1;
ninth.data.priority = 5;
ninth.data.category = "school";
ninth.addToLocalStorage();

const tenth = new Task('hit up FAH', Task.getUniqueUID(), 7, new Date('June 29, 2023 07:00:00'));
tenth.data.ddl = new Date('June 30, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
tenth.data.duration = 3;
tenth.data.priority = 5;
tenth.data.category = "personal";
tenth.addToLocalStorage();

const eleventh = new Task('fred again... and again... and again... AND AGAIN...', Task.getUniqueUID(), 7, new Date('June 1, 2023 15:00:00'));
eleventh.data.ddl = new Date('June 2, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
eleventh.data.duration = 6;
eleventh.data.priority = 5;
eleventh.data.category = "other";
eleventh.addToLocalStorage();

const twelveth = new Task('chapter meeting UGHHHHH', Task.getUniqueUID(), 7, new Date('June 26, 2023 20:00:00'));
twelveth.data.ddl = new Date('June 26, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
twelveth.data.duration = 1;
twelveth.data.priority = 5;
twelveth.data.category = "school";
twelveth.addToLocalStorage();

const thirteen = new Task('YOU DONT WORK ON A SATURDAY STOP THE CAP!', Task.getUniqueUID(), 7, new Date('June 10, 2023 08:00:00'));
thirteen.data.ddl = new Date('June 11, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
thirteen.data.duration = 15;
thirteen.data.priority = 5;
thirteen.addToLocalStorage();

const bday = new Task('your bday!', Task.getUniqueUID(), 7, new Date('November 5, 2023 00:00:00'));
bday.data.ddl = new Date('November 5, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
bday.data.duration = 24;
bday.data.priority = 5;
bday.addToLocalStorage();

const main = new Task('CLICK ME!', Task.getUniqueUID(), 13, new Date('June 27, 2023 12:00:00'))
main.data.ddl = new Date('June 28, 2023 23:59:00');  // Deadline: November 23nd, 11:59pm 
main.data.duration = 1;
main.data.priority = 2;
main.addToLocalStorage();

//Task.schedule();